"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-[var(--brand-900)] hero-gradient">
      {/* Header */}
      <header className="site-header-root sticky top-0">
        <div className="site-container relative py-3 glass rounded-xl mt-2 shadow-soft">
          {/* Left navigation for desktop */}
          <nav className="hidden md:flex gap-6 items-center absolute left-0 top-1/2 -translate-y-1/2 text-sm text-slate-700">
            <Link href="/" className="hover:text-slate-900">Anasayfa</Link>
            <Link href="/rooms" className="hover:text-slate-900">Odalar</Link>
            <a href="#iletisim" className="hover:text-slate-900">İletişim</a>
          </nav>

          {/* Center pill logo */}
          <div className="flex justify-center">
            <div className="pill-logo">MERTCAN PANSİYON</div>
          </div>

          {/* Right actions */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-3">
            <a href="#iletisim" className="hidden md:inline-flex text-sm bg-[var(--brand-900)] text-white px-4 py-2 rounded-full hover:opacity-95">Rezervasyon</a>
            <button
              aria-label="Menü"
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-full bg-[var(--brand-700)] text-white flex items-center justify-center shadow-md md:shadow-none"
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="18" height="2" rx="1" fill="white" />
                <rect y="5" width="18" height="2" rx="1" fill="white" />
                <rect y="10" width="18" height="2" rx="1" fill="white" />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden mt-3 bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <a href="https://maps.app.goo.gl/tbY6XAndX8y3jJGi9" target="_blank" rel="noreferrer" className="block py-3 px-4 hover:bg-gray-50">Adres</a>
              <Link href="/rooms" className="block py-3 px-4 hover:bg-gray-50">Odalar</Link>
              <a href="#iletisim" className="block py-3 px-4 hover:bg-gray-50">İletişim</a>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <main className="site-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Sezon Boyunca Açığız</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">Şehrin kalbinde sıcak ve konforlu konaklama</h1>
            <p className="text-base text-slate-600 mb-6 max-w-xl">Mertcan Pansiyon, yalın ve samimi hizmet anlayışıyla misafirlerimize temiz ve uygun fiyatlı konaklama sunar. Merkezi konumu sayesinde şehrin önemli noktalarına kolay erişim sağlarsınız.</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/rooms" className="inline-flex items-center justify-center px-6 py-3 bg-[var(--brand-900)] text-white rounded-full text-sm font-semibold hover:opacity-95">Odaları Gör</Link>
              <a href="#iletisim" className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 rounded-full text-sm text-slate-700">İletişim</a>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-gray-100">
              <div className="relative aspect-[4/3]">
                <Image src="/rooms/room1.jpeg" alt="Oda görseli" fill className="object-cover" priority />
              </div>
              <div className="p-4 text-sm text-slate-600 flex justify-between">
                <span>Merkez / 2 dk yürüyüş</span>
                <span>24/7 Resepsiyon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: 'Şehir merkezi', i: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 21h18" stroke="#0f172a" strokeWidth="1.5"/><path d="M7 21V9l5-4 5 4v12" stroke="#0f172a" strokeWidth="1.5"/></svg>
              )},
              { t: 'Kahvaltı dahil', i: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 10h12a4 4 0 1 0 0-8H4v18" stroke="#0f172a" strokeWidth="1.5"/></svg>
              )},
              { t: 'Hızlı check-in', i: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 12h7l3 3 7-7" stroke="#0f172a" strokeWidth="1.5"/></svg>
              )},
              { t: 'Sessiz odalar', i: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 9v6l5 3V6L4 9zM14 9l5-5M14 15l5 5" stroke="#0f172a" strokeWidth="1.5"/></svg>
              )}
            ].map((f) => (
              <div key={f.t} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="shrink-0">{f.i}</div>
                <div className="text-sm font-semibold text-slate-800">{f.t}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="iletisim" className="bg-white border-t border-gray-100">
        <div className="site-container py-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">
          <div>
            <div className="font-semibold text-slate-800 mb-1">Mertcan Pansiyon</div>
            <div>Şehrin kalbinde sade ve konforlu konaklama</div>
          </div>
          <div>
            <div className="font-semibold text-slate-800 mb-1">İletişim</div>
            <div>info@mertcanpansiyon.com</div>
            <div>+90 555 555 55 55</div>
          </div>
          <div>
            <div className="font-semibold text-slate-800 mb-1">Adres</div>
            <a className="hover:text-slate-800" target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/tbY6XAndX8y3jJGi9">Haritada Aç</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
