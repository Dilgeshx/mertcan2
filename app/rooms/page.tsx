import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Odalar • Mertcan Pansiyon',
};

const images = [
  { src: '/rooms/room1.jpeg', alt: 'Oda 1' },
  { src: '/rooms/room2.jpeg', alt: 'Oda 2' },
];

export default function RoomsPage() {
  return (
    <main className="site-container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-extrabold">Odalar</h1>
        <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">← Anasayfa</Link>
      </div>

      <p className="text-slate-600 mb-6 max-w-2xl">Temiz, sade ve konforlu odalarımızı aşağıda görebilirsiniz. Rezervasyon için iletişime geçebilirsiniz.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((img) => (
          <div key={img.src} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
            <div className="p-3 text-sm text-slate-700">{img.alt}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
