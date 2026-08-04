'use client';

import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconArrowUp,
  IconSend,
  IconDownload,
} from '@tabler/icons-react';
import { UZAIR_INFO } from '@/lib/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0C100E] border-t border-[#283831] pt-20 pb-12 px-5 sm:px-8" id="contact">
      <div className="max-w-[1160px] mx-auto space-y-16">
        {/* Call to Action Banner */}
        <div className="card-technical p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-gradient-to-r from-[#131B17] via-[#1C2722] to-[#131B17]">
          <div className="space-y-3 max-w-2xl relative z-10">
            <div className="badge-tag">
              <span>05 — CONTACT & COLLABORATION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#F5F7F2]">
              Let&apos;s talk about your next build.
            </h2>
            <p className="text-xs sm:text-sm text-[#A3B2A9] leading-relaxed">
              Available for Next.js product builds and Nest.js API / microservices work.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 rounded-full bg-[#F2DC9D] hover:bg-[#F7E4B2] text-[#0C100E] font-mono font-bold text-xs flex items-center gap-2 transition-all shadow-lg hover:shadow-xl shrink-0 cursor-pointer relative z-10"
            id="footer-get-in-touch-btn"
          >
            <IconSend className="w-4 h-4" stroke={1.5} />
            <span>START CONVERSATION</span>
          </button>

          {/* Decorative Subtle Background Grid */}
          <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-b border-[#283831] pb-12 text-xs font-mono">
          <div className="space-y-3">
            <div className="text-[#F5F7F2] font-bold uppercase tracking-wider text-[11px]">Quick Navigation</div>
            <ul className="space-y-2 text-[#A3B2A9]">
              <li>
                <a href="#about" className="hover:text-[#F2DC9D] transition-colors">
                  01 — About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#F2DC9D] transition-colors">
                  02 — Featured Work
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#F2DC9D] transition-colors">
                  03 — Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#F2DC9D] transition-colors">
                  04 — Skill Matrix
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-[#F5F7F2] font-bold uppercase tracking-wider text-[11px]">Direct Channels</div>
            <ul className="space-y-2 text-[#A3B2A9]">
              <li>
                <a
                  href={UZAIR_INFO.cvUrl}
                  download="Uzair-Muaz-CV.pdf"
                  className="hover:text-[#F2DC9D] transition-colors flex items-center gap-1.5"
                >
                  <IconDownload className="w-3.5 h-3.5 text-[#F2DC9D]" stroke={1.5} />
                  <span>Download CV (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${UZAIR_INFO.email}`}
                  className="hover:text-[#F2DC9D] transition-colors flex items-center gap-1.5"
                >
                  <IconMail className="w-3.5 h-3.5 text-[#F2DC9D]" stroke={1.5} />
                  <span>{UZAIR_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={UZAIR_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors flex items-center gap-1.5"
                >
                  <IconBrandWhatsapp className="w-3.5 h-3.5 text-[#25D366]" stroke={1.5} />
                  <span>WhatsApp · {UZAIR_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={UZAIR_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2DC9D] transition-colors flex items-center gap-1.5"
                >
                  <IconBrandGithub className="w-3.5 h-3.5 text-[#F2DC9D]" stroke={1.5} />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={UZAIR_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2DC9D] transition-colors flex items-center gap-1.5"
                >
                  <IconBrandLinkedin className="w-3.5 h-3.5 text-[#F2DC9D]" stroke={1.5} />
                  <span>LinkedIn Network</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A3B2A9]">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Uzair Muaz. Engineered with precision.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#131B17] border border-[#283831] hover:border-[#F2DC9D] text-[#F5F7F2] hover:text-[#F2DC9D] transition-colors cursor-pointer"
            id="footer-back-to-top"
          >
            <span>Back to Top</span>
            <IconArrowUp className="w-3.5 h-3.5 text-[#F2DC9D]" stroke={1.5} />
          </button>
        </div>
      </div>
    </footer>
  );
}
