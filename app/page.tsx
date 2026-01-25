"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

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
    <div className="min-h-screen text-slate-900 hero-gradient relative">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute -right-16 top-10 w-72 h-72 bg-cyan-400/15 blur-3xl rounded-full" />
      <div className="absolute -left-10 top-36 w-72 h-72 bg-orange-400/15 blur-3xl rounded-full" />
      {/* Brand banner (replaces navbar) */}
      <div className="site-container mt-6">
        <h1 className="text-center text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text brand-animated">MERTCAN PANSİYON</h1>
      </div>

      {/* Hero */}
      <main className="site-container py-32 lg:py-48 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cyan-200 bg-slate-900/80 border border-cyan-500/30 rounded-full px-4 py-2 shadow-soft">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Sezon Boyunca Açığız
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-relaxed text-white max-w-2xl">
              Karabük'ün kalbinde
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-orange-300">sıcak ve modern konaklama</span>
            </h1>
            <p className="text-base lg:text-lg text-slate-200 max-w-xl leading-relaxed">
              Karabük'ün merkezinde yer alan Mertcan Pansiyon, yalın ve samimi hizmet anlayışıyla temiz, konforlu ve ulaşımı kolay odalar sunar. Modern dokunuşlarla sakin bir deneyim yaşayın.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/rooms" className="inline-flex items-center justify-center px-6 py-3 bg-cyan-400 text-slate-900 rounded-full text-sm font-semibold hover:opacity-90 shadow-soft">
                Odaları Gör
              </Link>
              <a href="#iletisim" className="inline-flex items-center justify-center px-6 py-3 border border-cyan-300/70 rounded-full text-sm text-cyan-100 bg-slate-900/60 hover:border-cyan-400/60">
                İletişim
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {[{ label: 'Merkeze', value: '2 dk yürüyüş' }, { label: 'Check-in', value: '7/24 hazır' }, { label: 'Memnuniyet', value: '%98' }].map((item) => (
                <div key={item.label} className="panel-muted p-4 md:p-5 min-h-[120px] flex flex-col justify-between">
                  <div className="text-[11px] uppercase text-slate-300 tracking-wide">{item.label}</div>
                  <div className="text-lg font-bold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
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
          </div>
        </div>

        {/* Features */}
        <section className="mt-32 lg:mt-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
            ].map((f) => (
              <div key={f.t} className="panel-muted p-5 lg:p-6 flex flex-col gap-3">
                <div className="shrink-0">{f.i}</div>
                <div className="text-sm lg:text-base font-semibold text-white">{f.t}</div>
                <div className="text-xs lg:text-sm text-slate-300 leading-relaxed">{f.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section removed */}

        {/* Secondary CTA */}
        <section className="mt-32 lg:mt-40">
          <div className="panel-accent rounded-2xl p-8 md:p-14 lg:p-16 text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-relaxed">Unutulmaz bir konaklama deneyimi yaşayın</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">Karabük'ün kalbinde, modern dokunuşlarla siz misafirlerimizi ağırlamaktan mutluluk duyuyoruz.</p>
            <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4">
              <a href="tel:+905555555555" className="inline-flex items-center justify-center px-8 py-3 bg-cyan-400 text-slate-900 rounded-full text-sm font-semibold hover:opacity-90 shadow-soft">
                Hemen Ara
              </a>
              <a href="#iletisim" className="inline-flex items-center justify-center px-8 py-3 border border-cyan-400 rounded-full text-sm text-cyan-200 hover:bg-cyan-500/15">
                Rezervasyon Yap
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="iletisim" className="mt-32 lg:mt-40 mb-28">
          <div className="panel rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-10 items-center justify-center text-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">İletişim</p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-relaxed">Rezervasyon ve bilgi için bize ulaşın</h3>
              <p className="text-slate-300 text-base leading-relaxed">info@mertcanpansiyon.com • +90 555 555 55 55 • Karabük Merkez, 100. Yıl, 1002. Cd. NO:1/18, 78050 Merkez/Karabük</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+905555555555" className="inline-flex items-center justify-center px-5 py-3 bg-cyan-400 text-slate-900 rounded-full text-sm font-semibold hover:opacity-90 shadow-soft">Hemen Ara</a>
              <a href="https://maps.app.goo.gl/tbY6XAndX8y3jJGi9" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-3 border border-slate-700 rounded-full text-sm text-slate-200 hover:border-cyan-400/60">Haritada Aç</a>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/905555555555"
        target="_blank"
        rel="noreferrer"
        className="fixed z-50 bottom-6 right-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-soft hover:shadow-lg"
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
