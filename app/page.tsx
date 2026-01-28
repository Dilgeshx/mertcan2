"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './components/ThemeToggle';

// Fade-in animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

export default function Home() {
  const [visibleRooms, setVisibleRooms] = useState([false, false, false]);
  const [roomsExpanded, setRoomsExpanded] = useState(false);
  const roomsRef = useRef<(HTMLDivElement | null)[]>([]);

  const rooms = [
    { src: '/rooms/room1.jpeg', title: 'Standart Oda', tag: 'Çift kişilik' },
    { src: '/rooms/room2.jpeg', title: 'Geniş Oda', tag: 'Aile için' },
    { src: '/rooms/room1.jpeg', title: 'Deluxe Oda', tag: 'Lüks' },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = roomsRef.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setVisibleRooms((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        }
      });
    }, observerOptions);

    roomsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-slate-900 hero-gradient relative overflow-hidden">
      <ThemeToggle />
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute -right-16 top-10 w-72 h-72 bg-cyan-400/15 blur-3xl rounded-full" />
      <div className="absolute -left-10 top-36 w-72 h-72 bg-orange-400/15 blur-3xl rounded-full" />
      {/* Brand banner (replaces navbar) */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-[calc(env(safe-area-inset-top)+12px)] px-4 pointer-events-none"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text brand-animated bg-slate-900/80 backdrop-blur-xl border border-white/8 rounded-t-md rounded-b-3xl px-7 sm:px-8 py-3 inline-block shadow-soft whitespace-nowrap font-heading pointer-events-auto w-fit">
          MERTCAN PANSİYON
        </h1>
      </motion.div>

      {/* Spacer to offset fixed heading */}
      <div className="h-24" />

      {/* Hero */}
      <main className="site-container py-28 lg:py-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
          <motion.div 
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <a href="https://maps.app.goo.gl/tbY6XAndX8y3jJGi9" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cyan-200 bg-slate-900/80 border border-cyan-500/30 rounded-full px-4 py-2 shadow-soft hover:border-cyan-400 hover:text-cyan-100 transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Haritada Aç
            </a>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-relaxed text-white max-w-2xl">
              Karabük'ün kalbinde
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-orange-300">sıcak ve modern konaklama</span>
            </h1>
            <p className="text-base lg:text-lg text-slate-200 max-w-xl leading-relaxed">
              Karabük'ün merkezinde yer alan Mertcan Pansiyon, yalın ve samimi hizmet anlayışıyla temiz, konforlu ve ulaşımı kolay odalar sunar. Modern dokunuşlarla sakin bir deneyim yaşayın.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/rooms" className="inline-flex items-center justify-center px-5 py-2.5 bg-cyan-400 text-slate-900 rounded-full text-sm font-semibold hover:opacity-90 shadow-soft">
                Odaları Gör
              </Link>
              <a href="#iletisim" className="inline-flex items-center justify-center px-5 py-2.5 border border-cyan-300/70 rounded-full text-sm text-cyan-100 bg-slate-900/60 hover:border-cyan-400/60">
                İletişim
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-10">
              {[
                { 
                  label: 'Merkezi Konum', 
                  value: '100. Yıl Cad.',
                  icon: (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  )
                },
                { 
                  label: 'Check-in', 
                  value: '7/24 Hazır',
                  icon: (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5">
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <path d="M16 2v4M8 2v4M3 10h18"/>
                      <path d="M9 17l2 2 4-4"/>
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.label} 
                  className="panel-muted p-6 md:p-7 min-h-[160px] flex flex-col items-center justify-center text-center gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-[11px] uppercase text-slate-300 tracking-wide mb-2">{item.label}</div>
                    <div className="text-base font-bold text-white">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-cyan-400/35 to-orange-400/30 blur-3xl" />
            <div className="panel neon-edge rounded-2xl overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src="/rooms/room1.jpeg" alt="Oda görseli" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-semibold text-white">
                  <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700">Şehir merkezi</span>
                  <span className="px-3 py-1 rounded-full bg-cyan-400 text-slate-900">Yeni dekor</span>
                </div>
              </div>
              <div className="p-4 text-sm text-slate-200 flex justify-between items-center bg-slate-900/70">
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Merkez / 2 dk yürüyüş</span>
                <span className="text-cyan-200">24/7 Resepsiyon</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.section 
          className="mt-56 lg:mt-[22rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              { t: 'Şehir merkezi', d: 'Ulaşım aksına birkaç adım mesafede', i: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 21h18" stroke="#67e8f9" strokeWidth="1.5"/><path d="M7 21V9l5-4 5 4v12" stroke="#e2e8f0" strokeWidth="1.5"/></svg>
              )},
              { t: 'Günlük temizlik', d: 'Her konaklamada titiz hijyen ve düzen', i: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 20h16M5 16l2-9h10l2 9" stroke="#e2e8f0" strokeWidth="1.5"/><path d="M9 11h6" stroke="#67e8f9" strokeWidth="1.5"/></svg>
              )},
              { t: 'Hızlı check-in', d: 'QR destekli, beklemeden giriş', i: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 12h7l3 3 7-7" stroke="#67e8f9" strokeWidth="1.5"/></svg>
              )},
              { t: 'Sessiz odalar', d: 'Çift cam ve akustik yalıtım', i: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 9v6l5 3V6L4 9zM14 9l5-5M14 15l5 5" stroke="#e2e8f0" strokeWidth="1.5"/></svg>
              )}
            ].map((f, index) => (
              <motion.div 
                key={f.t} 
                className="panel-muted p-6 lg:p-8 flex flex-col gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="shrink-0">{f.i}</div>
                <div className="text-sm lg:text-base font-semibold text-white">{f.t}</div>
                <div className="text-xs lg:text-sm text-slate-300 leading-relaxed">{f.d}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us Section removed */}

        {/* Secondary CTA */}
        <motion.section 
          className="mt-56 lg:mt-[22rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleIn}
          transition={{ duration: 0.8 }}
        >
          <div className="panel-accent rounded-2xl p-12 md:p-20 lg:p-24 text-center space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-relaxed">Unutulmaz bir konaklama deneyimi yaşayın</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">Karabük'ün kalbinde, modern dokunuşlarla siz misafirlerimizi ağırlamaktan mutluluk duyuyoruz.</p>
            <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-3">
              <a href="tel:+905555555555" className="inline-flex items-center justify-center px-6 py-2.5 bg-cyan-400 text-slate-900 rounded-full text-sm font-semibold hover:opacity-90 shadow-soft">
                Hemen Ara
              </a>
              <a href="#iletisim" className="inline-flex items-center justify-center px-6 py-2.5 border border-cyan-400 rounded-full text-sm text-cyan-200 hover:bg-cyan-500/15">
                Rezervasyon Yap
              </a>
            </div>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section 
          id="iletisim" 
          className="mt-56 lg:mt-[22rem] mb-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <div className="panel rounded-2xl p-12 md:p-16 lg:p-24 flex flex-col md:flex-row gap-16 items-center justify-center text-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">İletişim</p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-relaxed">Rezervasyon ve bilgi için bize ulaşın</h3>
              <p className="text-slate-300 text-base leading-relaxed">info@mertcanpansiyon.com • +90 555 555 55 55 • Karabük Merkez, 100. Yıl, 1002. Cd. NO:1/18, 78050 Merkez/Karabük</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+905555555555" className="inline-flex items-center justify-center px-5 py-2.5 bg-cyan-400 text-slate-900 rounded-full text-sm font-semibold hover:opacity-90 shadow-soft">Hemen Ara</a>
              <a href="https://maps.app.goo.gl/tbY6XAndX8y3jJGi9" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-700 rounded-full text-sm text-slate-200 hover:border-cyan-400/60">Haritada Aç</a>
            </div>
          </div>
        </motion.section>
      </main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/905555555555"
        target="_blank"
        rel="noreferrer"
        className="fixed z-50 bottom-4 sm:bottom-6 right-4 sm:right-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-soft hover:shadow-lg"
        style={{ right: 'max(env(safe-area-inset-right), 16px)', bottom: 'max(env(safe-area-inset-bottom), 16px)' }}
        aria-label="WhatsApp ile rezervasyon"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l1.65-3.8a8 8 0 111.5 1.5L3 21z"></path>
          <path d="M16 17.5c-1 .5-1.5.5-2.5 0-1.5-.7-5.5-4.5-5.5-6 0-1 .7-1.5 1.2-2 .3-.3.7-.3 1 0l1.1 1.4c.3.4.3.8 0 1.1l-.5.6c.4.8 1.4 1.8 2.2 2.2l.6-.5c.3-.3.7-.3 1.1 0L17 14c.3.3.3.8 0 1.1-.5.5-1 1.2-1 2.4z"></path>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-slate-900/70 border-t border-slate-800">
        <div className="site-container py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-slate-300">
          <div>
            <div className="font-semibold text-white mb-1">Mertcan Pansiyon</div>
            <div className="text-slate-400">Şehrin kalbinde sade ve konforlu konaklama</div>
          </div>
          <div>
            <div className="font-semibold text-white mb-1">İletişim</div>
            <div className="text-slate-300">info@mertcanpansiyon.com</div>
            <div className="text-slate-300">+90 555 555 55 55</div>
          </div>
          <div>
            <div className="font-semibold text-white mb-1">Adres</div>
            <div className="text-slate-300 mb-2">Karabük Merkez, 100. Yıl, 1002. Cd. NO:1/18, 78050 Merkez/Karabük</div>
            <a className="text-cyan-300 hover:text-cyan-200" target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/tbY6XAndX8y3jJGi9">Haritada Aç</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
