"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

type Room = {
  id: string;
  name: string;
  label: string;
  summary: string;
  notes: string[];
  images: string[];
};

const rooms: Room[] = [
  {
    id: "oda1",
    name: "Oda 1",
    label: "Ferah ve aydinlik",
    summary:
      "Temiz cizgili, rahat ve sade bir konaklama hissi veren oda serisi.",
    notes: ["Gunluk temizlik", "Merkeze yakin", "Uzun konaklamaya uygun"],
    images: [
      "/rooms/oda1/WhatsApp%20Image%202025-09-23%20at%2012.07.05.jpeg",
      "/rooms/oda1/WhatsApp%20Image%202025-09-23%20at%2012.07.05%20(2).jpeg",
      "/rooms/oda1/WhatsApp%20Image%202025-09-23%20at%2012.07.05%20(1).jpeg",
      "/rooms/oda1/WhatsApp%20Image%202025-09-23%20at%2012.07.04.jpeg",
      "/rooms/oda1/WhatsApp%20Image%202025-09-23%20at%2012.07.04%20(1).jpeg",
    ],
  },
  {
    id: "oda2",
    name: "Oda 2",
    label: "Genis kullanim alani",
    summary:
      "Farkli acilardan guclu duran, daha acik ve yayvan his veren oda sunumu.",
    notes: ["Aydinlik ic mekan", "Konforlu yerlesim", "Kisa ve orta konaklama"],
    images: [
      "/rooms/oda2/WhatsApp%20Image%202025-09-23%20at%2012.06.58.jpeg",
      "/rooms/oda2/WhatsApp%20Image%202025-09-23%20at%2012.06.58%20(2).jpeg",
      "/rooms/oda2/WhatsApp%20Image%202025-09-23%20at%2012.06.58%20(1).jpeg",
      "/rooms/oda2/WhatsApp%20Image%202025-09-23%20at%2012.06.57.jpeg",
      "/rooms/oda2/WhatsApp%20Image%202025-09-23%20at%2012.06.55.jpeg",
      "/rooms/oda2/WhatsApp%20Image%202025-09-23%20at%2012.06.57%20(1).jpeg",
      "/rooms/oda2/WhatsApp%20Image%202025-09-23%20at%2012.06.52.jpeg",
    ],
  },
  {
    id: "oda3",
    name: "Oda 3",
    label: "Sakin ve sicak atmosfer",
    summary:
      "Daha yumusak ve dinlenme odakli bir oda hissi veren sakin fotograf akisi.",
    notes: ["Sessiz his", "Duzenli gorunum", "Dinlenme odakli atmosfer"],
    images: [
      "/rooms/oda3/WhatsApp%20Image%202025-09-23%20at%2012.07.03.jpeg",
      "/rooms/oda3/WhatsApp%20Image%202025-09-23%20at%2012.07.03%20(3).jpeg",
      "/rooms/oda3/WhatsApp%20Image%202025-09-23%20at%2012.07.03%20(1).jpeg",
      "/rooms/oda3/WhatsApp%20Image%202025-09-23%20at%2012.07.02%20(3).jpeg",
    ],
  },
];

export default function RoomsPage() {
  return (
    <main className="site-container relative px-0 py-12 pb-28 text-slate-900 md:py-16">
      <ThemeToggle />

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_58%)]" />

      <section className="mx-5 rounded-[2rem] border border-white/60 bg-white/80 px-6 py-8 shadow-soft backdrop-blur md:mx-0 md:px-10 md:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">
              Rooms
            </p>
            <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Odalar ayri ayri, rahat bosluklarla aksin.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Bu kez her odayi tek blok gibi sikistirmadan, kendi alanina sahip
              bir vitrin olarak yerlestirdim. Buyuk bosluklar, daha dengeli kart
              oranlari ve daha sakin bir akis var.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn btn-secondary">
              Anasayfa
            </Link>
            <a href="#oda1" className="btn btn-primary">
              Odalara in
            </a>
          </div>
        </div>
      </section>

      <div className="mt-20 space-y-28 md:mt-24 md:space-y-36">
        {rooms.map((room, index) => {
          const [heroImage, firstThumb, secondThumb, thirdThumb, ...rest] =
            room.images;
          const moreImages = [firstThumb, secondThumb, thirdThumb, ...rest].filter(
            Boolean
          ) as string[];

          return (
            <section key={room.id} id={room.id} className="scroll-mt-24">
              <div className="mb-8 flex flex-col gap-4 px-5 md:mb-10 md:px-0">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300 bg-cyan-50 text-sm font-semibold text-cyan-800">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      {room.label}
                    </p>
                    <h2 className="mt-1 text-3xl font-bold text-slate-900 md:text-5xl">
                      {room.name}
                    </h2>
                  </div>
                </div>
                <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                  {room.summary}
                </p>
              </div>

              <div className="grid gap-6 px-5 md:px-0 xl:grid-cols-[1.2fr_0.8fr] xl:gap-10">
                <article className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-soft">
                  <div className="relative aspect-[4/3] md:aspect-[16/11]">
                    <Image
                      src={heroImage}
                      alt={`${room.name} ana gorsel`}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <span className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
                        {room.label}
                      </span>
                    </div>
                  </div>
                </article>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
                  <article className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-soft md:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
                      Oda Ozeti
                    </p>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      Daha ferah gorunmesi icin bilgi alanlarini ayirdim ve tek
                      duvar gibi duran koyu blok yapisini kaldirdim.
                    </p>
                  </article>

                  <div className="grid gap-4">
                    {room.notes.map((note) => (
                      <article
                        key={note}
                        className="rounded-[1.5rem] border border-slate-200/70 bg-white px-5 py-4 shadow-soft"
                      >
                        <p className="text-sm font-semibold text-slate-800">
                          {note}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-5 px-5 md:mt-10 md:grid-cols-2 md:px-0 xl:grid-cols-3">
                {moreImages.map((image, imageIndex) => (
                  <article
                    key={image}
                    className="overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white shadow-soft"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image}
                        alt={`${room.name} detay ${imageIndex + 1}`}
                        fill
                        className="object-cover transition duration-500 hover:scale-[1.03]"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
