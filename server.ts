import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(express.json());

// In-Memory / File-Persisted Data Stores
interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  organization?: string;
  areaOfInterest: string;
  message: string;
  createdAt: string;
}

interface UserAccount {
  id: string;
  email: string;
  passwordHash: string;
  createdAt: string;
}

const DB_FILE = path.join(process.cwd(), '.data-store.json');

// Helper to load persisted store
function loadStore(): { messages: ContactMessage[]; users: UserAccount[] } {
  try {
    if (fs.existsSync(DB_FILE)) {
      const raw = fs.readFileSync(DB_FILE, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading store file:', err);
  }
  return { messages: [], users: [] };
}

// Helper to save store
function saveStore(data: { messages: ContactMessage[]; users: UserAccount[] }) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing store file:', err);
  }
}

let store = loadStore();

// Basic token/session store
const activeSessions: Record<string, string> = {}; // token -> userId

// -------------------------------------------------------------
// API ROUTES
// -------------------------------------------------------------

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'RJN2 Spark API' });
});

// Contact Form - Public Insert Policy allowed, Public Reads DENIED
app.post('/api/contact', (req: Request, res: Response) => {
  const { fullName, email, organization, areaOfInterest, message } = req.body;

  // Server-side strict constraint validation
  if (!fullName || typeof fullName !== 'string' || fullName.trim().length === 0) {
    res.status(400).json({ error: 'Full name is required' });
    return;
  }

  if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
    res.status(400).json({ error: 'A valid email address is required' });
    return;
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    res.status(400).json({ error: 'Message must be at least 10 characters long' });
    return;
  }

  const validAreas = ['Workflow Optimization', 'AI Literacy', 'Work Placement', 'General Inquiry'];
  const selectedArea = validAreas.includes(areaOfInterest) ? areaOfInterest : 'General Inquiry';

  const newMessage: ContactMessage = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    fullName: fullName.trim(),
    email: email.trim().toLowerCase(),
    organization: organization ? String(organization).trim() : '',
    areaOfInterest: selectedArea,
    message: message.trim(),
    createdAt: new Date().toISOString()
  };

  store.messages.push(newMessage);
  saveStore(store);

  res.status(201).json({
    success: true,
    message: "Thanks — we'll be in touch within 1 business day.",
    id: newMessage.id
  });
});

// Explicit Public Read Security Policy: Denied
app.get('/api/contact', (req: Request, res: Response) => {
  res.status(403).json({
    error: 'Access denied: Public reads are not permitted for contact submissions.'
  });
});

// Auth API - Sign Up
app.post('/api/auth/signup', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    res.status(400).json({ error: 'Please enter a valid email address.' });
    return;
  }

  if (!password || typeof password !== 'string' || password.length < 6) {
    res.status(400).json({ error: 'Password must be at least 6 characters long.' });
    return;
  }

  const normalizedEmail = email.trim().toLowerCase();
  const existingUser = store.users.find(u => u.email === normalizedEmail);

  if (existingUser) {
    res.status(409).json({ error: 'An account with this email already exists. Please sign in.' });
    return;
  }

  // Basic mock hash for demonstration
  const newUser: UserAccount = {
    id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    email: normalizedEmail,
    passwordHash: `hash_${password}`,
    createdAt: new Date().toISOString()
  };

  store.users.push(newUser);
  saveStore(store);

  const sessionToken = `token_${newUser.id}_${Date.now()}`;
  activeSessions[sessionToken] = newUser.id;

  res.status(201).json({
    success: true,
    user: { id: newUser.id, email: newUser.email, createdAt: newUser.createdAt },
    token: sessionToken
  });
});

// Auth API - Login
app.post('/api/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required.' });
    return;
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const user = store.users.find(u => u.email === normalizedEmail);

  if (!user || user.passwordHash !== `hash_${password}`) {
    res.status(401).json({ error: 'Invalid email or password.' });
    return;
  }

  const sessionToken = `token_${user.id}_${Date.now()}`;
  activeSessions[sessionToken] = user.id;

  res.json({
    success: true,
    user: { id: user.id, email: user.email, createdAt: user.createdAt },
    token: sessionToken
  });
});

// Auth API - Get Current User
app.get('/api/auth/me', (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.replace('Bearer ', '');

  if (!token || !activeSessions[token]) {
    res.status(401).json({ error: 'Unauthenticated' });
    return;
  }

  const userId = activeSessions[token];
  const user = store.users.find(u => u.id === userId);

  if (!user) {
    res.status(401).json({ error: 'User not found' });
    return;
  }

  res.json({
    user: { id: user.id, email: user.email, createdAt: user.createdAt }
  });
});

// Auth API - Logout
app.post('/api/auth/logout', (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.replace('Bearer ', '');

  if (token && activeSessions[token]) {
    delete activeSessions[token];
  }

  res.json({ success: true });
});

// -------------------------------------------------------------
// SEO & STATIC ROBOTS / SITEMAP
// -------------------------------------------------------------

app.get('/robots.txt', (req: Request, res: Response) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /

Sitemap: ${process.env.APP_URL || 'https://rjn2spark.com'}/sitemap.xml
`);
});

app.get('/sitemap.xml', (req: Request, res: Response) => {
  const baseUrl = process.env.APP_URL || 'https://rjn2spark.com';
  const routes = ['', '/services', '/tools', '/pricing', '/contact', '/auth'];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    r => `  <url>
    <loc>${baseUrl}${r}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${r === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.type('application/xml');
  res.send(xml);
});

// -------------------------------------------------------------
// VITE / EXPRESS INTEGRATION
// -------------------------------------------------------------

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`RJN2 Spark Server listening at http://0.0.0.0:${PORT}`);
  });
}

startServer();
