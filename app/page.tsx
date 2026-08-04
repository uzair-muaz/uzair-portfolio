'use client';

import { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#08080a] text-neutral-100 selection:bg-[#00E699] selection:text-black">
        <Navbar onOpenContact={() => setIsContactOpen(true)} />

        <Hero onOpenContact={() => setIsContactOpen(true)} />

        <Projects />

        <Experience />

        <Skills />

        <Footer onOpenContact={() => setIsContactOpen(true)} />

        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </main>
    </SmoothScroll>
  );
}
