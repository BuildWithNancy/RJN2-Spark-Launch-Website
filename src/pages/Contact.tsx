import React, { useState } from 'react';
import { z } from 'zod';
import { SEOHead } from '../components/SEOHead';
import { Mail, Instagram, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

// Zod schema for client-side validation
const contactSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name is required (at least 2 characters).' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  organization: z.string().optional(),
  areaOfInterest: z.enum(['Workflow Optimization', 'AI Literacy', 'Work Placement', 'General Inquiry']),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' })
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormInputs>({
    fullName: '',
    email: '',
    organization: '',
    areaOfInterest: 'Workflow Optimization',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInputs, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // Validate a single field on change
  const validateField = (name: keyof ContactFormInputs, value: string) => {
    const fieldData = { ...formData, [name]: value };
    const result = contactSchema.safeParse(fieldData);
    
    if (result.success) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    } else {
      const fieldError = result.error.format()[name]?._errors[0];
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name as keyof ContactFormInputs, value);
    if (serverError) setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setSubmitSuccess(null);

    // Full Zod validation check
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const formattedErrors: Partial<Record<keyof ContactFormInputs, string>> = {};
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof ContactFormInputs;
        if (fieldName) {
          formattedErrors[fieldName] = issue.message;
        }
      });
      setErrors(formattedErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(validation.data)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit contact request.');
      }

      setSubmitSuccess(data.message || "Thanks — we'll be in touch within 1 business day.");
      setFormData({
        fullName: '',
        email: '',
        organization: '',
        areaOfInterest: 'Workflow Optimization',
        message: ''
      });
      setErrors({});
    } catch (err: any) {
      setServerError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.fullName.trim().length >= 2 &&
    formData.email.includes('@') &&
    formData.message.trim().length >= 10 &&
    Object.values(errors).every((err) => err === undefined);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB] py-16 sm:py-24">
      <SEOHead
        title="Contact & Intake | RJN2 Spark"
        description="Book a free 20-minute workflow audit or get in touch with RJN2 Spark to streamline your client intake and operations."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest font-sans">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#F5F2EB]">
            Let's Build Better Systems
          </h1>
          <p className="text-base sm:text-lg text-[#9CA3AF] font-sans font-light">
            Ready to stop chasing inquiries and start running on systems? Fill out the form below or reach out directly to schedule a workflow audit.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Reach Us */}
          <div className="lg:col-span-5 bg-[#0F172A] border border-[#262626] rounded-2xl p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#F5F2EB] mb-2">
                Reach Us Directly
              </h2>
              <p className="text-sm text-[#9CA3AF] font-sans leading-relaxed">
                Whether you have a quick question or want to discuss a full operational roadmap, we reply to all inquiries within one business day.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-[#262626]">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0A0A0A] border border-[#C9A227]/30 text-[#C9A227] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-sans block">
                    Direct Email
                  </span>
                  <a
                    href="mailto:projects@rjn2spark.com"
                    className="text-base font-mono text-[#F5F2EB] hover:text-[#C9A227] transition-colors"
                  >
                    projects@rjn2spark.com
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0A0A0A] border border-[#C9A227]/30 text-[#C9A227] shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-sans block">
                    Instagram
                  </span>
                  <a
                    href="https://instagram.com/rjn2spark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-sans text-[#F5F2EB] hover:text-[#C9A227] transition-colors"
                  >
                    @rjn2spark
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0A0A0A] border border-[#C9A227]/30 text-[#C9A227] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-sans block">
                    Global Reach
                  </span>
                  <span className="text-base font-sans text-[#F5F2EB]">
                    Working with teams worldwide
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0A0A0A]/60 border border-[#C9A227]/20 text-xs text-[#9CA3AF] font-sans leading-relaxed">
              💡 <span className="text-[#F5F2EB]">Free Audit Promise:</span> Every engagement begins with a complimentary 20-minute assessment of your intake and follow-up bottlenecks.
            </div>
          </div>

          {/* Right Column — Intake Form */}
          <div className="lg:col-span-7 bg-[#0F172A] border border-[#262626] rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold text-[#F5F2EB] mb-6">
              Workflow Audit & Inquiry Form
            </h2>

            {submitSuccess ? (
              <div className="p-8 rounded-xl bg-[#0A0A0A] border border-[#C9A227] text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A227]/20 border border-[#C9A227] text-[#C9A227] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#F5F2EB]">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-[#9CA3AF] font-sans max-w-md mx-auto">
                  {submitSuccess}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitSuccess(null)}
                    className="px-6 py-2.5 rounded bg-[#C9A227] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider hover:bg-[#E0BA38] transition-all"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {serverError && (
                  <div className="p-4 rounded-lg bg-red-950/50 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{serverError}</span>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium uppercase tracking-wider text-[#9CA3AF] mb-2 font-sans">
                    Full Name <span className="text-[#C9A227]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border text-[#F5F2EB] placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:ring-1 transition-all ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-[#262626] focus:border-[#C9A227] focus:ring-[#C9A227]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1 font-sans">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-[#9CA3AF] mb-2 font-sans">
                    Email Address <span className="text-[#C9A227]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sarah@yourfirm.com"
                    className={`w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border text-[#F5F2EB] placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:ring-1 transition-all ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-[#262626] focus:border-[#C9A227] focus:ring-[#C9A227]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 font-sans">{errors.email}</p>
                  )}
                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="block text-xs font-medium uppercase tracking-wider text-[#9CA3AF] mb-2 font-sans">
                    Organization / Firm Name <span className="text-xs text-[#9CA3AF]/60 lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Apex Advisory Group"
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#262626] text-[#F5F2EB] placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                  />
                </div>

                {/* Area of Interest */}
                <div>
                  <label htmlFor="areaOfInterest" className="block text-xs font-medium uppercase tracking-wider text-[#9CA3AF] mb-2 font-sans">
                    Area of Interest
                  </label>
                  <select
                    id="areaOfInterest"
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#262626] text-[#F5F2EB] text-sm focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                  >
                    <option value="Workflow Optimization">Workflow Optimization</option>
                    <option value="AI Literacy">AI Literacy</option>
                    <option value="Work Placement">Work Placement</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-[#9CA3AF] mb-2 font-sans">
                    Message / Current Operations Bottlenecks <span className="text-[#C9A227]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us briefly about your client intake, follow-up, or operations friction..."
                    className={`w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border text-[#F5F2EB] placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:ring-1 transition-all ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-[#262626] focus:border-[#C9A227] focus:ring-[#C9A227]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1 font-sans">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded text-xs font-bold uppercase tracking-widest transition-all ${
                      isFormValid && !isSubmitting
                        ? 'bg-[#C9A227] text-[#0A0A0A] hover:bg-[#E0BA38] shadow-md cursor-pointer'
                        : 'bg-[#262626] text-[#9CA3AF] cursor-not-allowed opacity-60'
                    }`}
                  >
                    {isSubmitting ? (
                      <span>Submitting inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit & Request Audit</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
