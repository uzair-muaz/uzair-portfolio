'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IconX,
  IconSend,
  IconSparkles,
  IconCircleCheck,
  IconLoader2,
  IconAlertCircle,
  IconBrandWhatsapp,
  IconChevronDown,
} from '@tabler/icons-react';
import { UZAIR_INFO } from '@/lib/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    roleType: 'Freelance Project',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const resetAndClose = () => {
    setStatus('idle');
    setErrorMsg('');
    setFormState({ name: '', email: '', message: '', roleType: 'Freelance Project' });
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          inquiryType: formState.roleType,
          message: formState.message,
        }),
      });

      const data = (await res.json().catch(() => null)) as { error?: string } | null;

      if (!res.ok) {
        throw new Error(data?.error || 'Failed to send. Please try again.');
      }

      setStatus('success');
      setTimeout(resetAndClose, 2500);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0C100E]/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl rounded-2xl p-6 sm:p-8 border border-[#283831] bg-[#131B17] text-[#F5F7F2] space-y-6 shadow-2xl"
        >
          <button
            onClick={resetAndClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#1C2722] border border-[#283831] text-[#A3B2A9] hover:text-[#F5F7F2] transition-colors cursor-pointer"
          >
            <IconX className="w-5 h-5" stroke={1.5} />
          </button>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2DC9D]/15 border border-[#F2DC9D]/35 text-[#F2DC9D] text-xs font-mono font-semibold">
              <IconSparkles className="w-3.5 h-3.5" stroke={1.5} />
              <span>DIRECT INQUIRY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-[#F5F7F2]">
              Get in Touch with Uzair
            </h3>
            <p className="text-xs text-[#A3B2A9]">
              Reach out for freelance work, contracts, consulting, or full-time roles — messages go
              straight to {UZAIR_INFO.email}.
            </p>
          </div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-xl bg-[#98D198]/15 border border-[#98D198]/35 text-center space-y-3"
            >
              <IconCircleCheck className="w-12 h-12 text-[#98D198] mx-auto" stroke={1.5} />
              <h4 className="text-xl font-bold text-[#F5F7F2]">Message sent!</h4>
              <p className="text-xs text-[#A3B2A9]">
                Thanks for reaching out. I&apos;ll reply to {formState.email || 'your email'} soon.
              </p>
            </motion.div>
          ) : (
            <>
              <a
                href={UZAIR_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2.5 text-xs font-mono font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/20"
              >
                <IconBrandWhatsapp className="h-4 w-4" stroke={1.5} />
                <span>WhatsApp · {UZAIR_INFO.phone}</span>
              </a>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#A3B2A9] mb-1 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins (VP of Engineering)"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1C2722] border border-[#283831] text-[#F5F7F2] text-sm focus:outline-none focus:border-[#F2DC9D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A3B2A9] mb-1 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1C2722] border border-[#283831] text-[#F5F7F2] text-sm focus:outline-none focus:border-[#F2DC9D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A3B2A9] mb-1 font-medium">
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <select
                      name="inquiryType"
                      value={formState.roleType}
                      onChange={(e) => setFormState({ ...formState, roleType: e.target.value })}
                      className="w-full appearance-none rounded-xl border border-[#283831] bg-[#1C2722] py-2.5 pl-4 pr-11 text-sm text-[#F5F7F2] focus:border-[#F2DC9D] focus:outline-none"
                    >
                      <option value="Freelance Project">Freelance Project</option>
                      <option value="Contract / Retainer">Contract / Retainer</option>
                      <option value="Full-time Opportunity">Full-time Opportunity</option>
                      <option value="Technical Consulting">Technical Consulting</option>
                      <option value="Partnership / Collaboration">
                        Partnership / Collaboration
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <IconChevronDown
                      className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A3B2A9]"
                      stroke={1.5}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A3B2A9] mb-1 font-medium">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    name="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Brief overview of your project, company, or open engineering role..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1C2722] border border-[#283831] text-[#F5F7F2] text-sm focus:outline-none focus:border-[#F2DC9D]"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-xs text-red-300">
                    <IconAlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" stroke={1.5} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 rounded-full bg-[#F2DC9D] hover:bg-[#F7E4B2] disabled:opacity-60 text-[#0C100E] font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer transition-all"
                >
                  {status === 'loading' ? (
                    <>
                      <IconLoader2 className="w-4 h-4 animate-spin" stroke={1.5} />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <IconSend className="w-4 h-4" stroke={1.5} />
                      <span>Send Direct Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
