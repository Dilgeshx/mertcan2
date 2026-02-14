"use client";

import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

const images = [
  { src: '/rooms/room1.jpeg', alt: 'Oda 1' },
  { src: '/rooms/room2.jpeg', alt: 'Oda 2' },
];

export default function RoomsPage() {
  return (
    <main className="site-container py-12 pb-20 text-slate-900">
      <ThemeToggle />
      <div className="flex flex-col gap-3 mb-8">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-3xl font-extrabold">Odalar</h1>
          <Link href="/" className="btn btn-secondary">← Anasayfa</Link>
        </div>
        <p className="text-slate-700 max-w-2xl">Temiz, sade ve konforlu odalarımızı aşağıda görebilirsiniz. Rezervasyon için iletişime geçebilirsiniz.</p>
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-cyan-700 bg-cyan-100 border border-cyan-300 rounded-full px-3 py-2 w-max">Yenilenen oda serisi</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {images.map((img, idx) => (
          <div key={img.src} className="panel neon-edge rounded-2xl overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3]">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              <div className="absolute bottom-3 left-3 flex gap-2 text-[11px] font-semibold">
                <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-800 text-slate-100">{img.alt}</span>
                <span className="px-3 py-1 rounded-full bg-cyan-400 text-slate-900">Günlük temizlik</span>
              </div>
              {idx === 0 && <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-orange-400 text-slate-900 text-[11px] font-semibold">En çok tercih edilen</span>}
            </div>
            <div className="p-4 text-sm text-slate-700 flex items-center justify-between">
              <span>Merkez / 2 dk yürüyüş</span>
              <span className="text-cyan-600">Hızlı check-in</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
