import TrustSignals from '../components/TrustSignals';
import FAQ from '../components/FAQ';
import { openWA, WA_MESSAGES } from '../utils/whatsapp';

const cars = [
  {
    name: "Honda HR-V",
    category: "SUV",
    tag: "Terlaris",
    image: "../assets/honda-hrv.jpg",
    transmission: "Otomatis",
    seats: 5,
    fuel: "Bensin",
    rate: "500.000",
    highlight: true,
  },
  {
    name: "Toyota Innova Zenix",
    category: "MPV",
    tag: "Keluarga",
    image: "../assets/toyota-innova-zenix.jpg",
    transmission: "Hybrid",
    seats: 7,
    fuel: "Bensin",
    rate: "850.000",
    highlight: false,
  },
  {
    name: "Mitsubishi Pajero Sport",
    category: "SUV",
    tag: "Premium",
    image: "/src/assets/pajero.jpg",
    transmission: "Otomatis",
    seats: 7,
    fuel: "Diesel",
    rate: "1.200.000",
    highlight: true,
  },
  {
    name: "Toyota Avanza",
    category: "MPV",
    tag: "Ekonomis",
    image: "/src/assets/toyota-avanza.jpg",
    transmission: "Manual",
    seats: 7,
    fuel: "Bensin",
    rate: "300.000",
    highlight: false,
  },
  {
    name: "Honda Brio",
    category: "City Car",
    tag: "Hemat BBM",
    image: "/src/assets/honda-brio.jpg",
    transmission: "Otomatis",
    seats: 5,
    fuel: "Bensin",
    rate: "250.000",
    highlight: false,
  },
  {
    name: "Toyota Alphard",
    category: "Luxury",
    tag: "VIP",
    image: "/src/assets/toyota-alphard.jpg",
    transmission: "Otomatis",
    seats: 7,
    fuel: "Bensin",
    rate: "2.500.000",
    highlight: true,
  },
];

const categories = ["Semua", "City Car", "SUV", "MPV", "Luxury"];
const transmissions = ["Semua", "Otomatis", "Manual", "Hybrid"];

import { useState } from 'react';

export default function FleetPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeTrans, setActiveTrans] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = cars.filter(car => {
    const matchCategory = activeCategory === "Semua" || car.category === activeCategory;
    const matchTrans = activeTrans === "Semua" || car.transmission === activeTrans;
    const matchSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchTrans && matchSearch;
  });

  return (
    <div className="pt-24 min-h-screen flex flex-col bg-surface">
      {/* Page Header */}
      <section className="bg-primary pt-20 pb-28 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
            <span className="material-symbols-outlined text-[14px]">directions_car</span>
            Koleksi Armada
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6">Pilih Kendaraan Impian Anda</h1>
          <p className="text-white/80 font-body text-lg leading-relaxed">
            Dari city car ekonomis hingga luxury MPV, kami punya kendaraan sempurna untuk setiap perjalanan.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm px-6 md:px-12 py-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-grow max-w-md w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
            <input
              type="text"
              id="fleet-search"
              placeholder="Cari nama kendaraan..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-surface-container border border-outline-variant/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-body text-sm text-on-surface"
            />
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                id={`filter-cat-${cat.toLowerCase().replace(' ', '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${activeCategory === cat
                  ? 'brand-gradient text-white shadow-md glow-shadow-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-primary/10 hover:text-primary border border-outline-variant/30'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Transmission Filter */}
          <select
            id="filter-transmission"
            value={activeTrans}
            onChange={e => setActiveTrans(e.target.value)}
            className="px-4 py-2.5 rounded-full bg-surface-container border border-outline-variant/40 text-sm font-bold text-on-surface focus:outline-none focus:border-primary cursor-pointer"
          >
            {transmissions.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="px-6 md:px-12 py-16 max-w-screen-xl mx-auto w-full">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-[64px] text-on-surface-variant/40">search_off</span>
            <p className="font-headline text-xl text-on-surface-variant mt-4">Kendaraan tidak ditemukan</p>
            <button onClick={() => { setSearchQuery(''); setActiveCategory('Semua'); setActiveTrans('Semua'); }} className="mt-4 text-primary font-bold hover:underline">
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((car, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant/40 float-hover">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${car.highlight ? 'accent-gradient text-white shadow-md' : 'bg-white/90 backdrop-blur-md text-primary'}`}>
                    {car.tag}
                  </span>
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-on-surface-variant">
                    {car.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">{car.name}</h3>
                  <div className="flex gap-3 mb-5 mt-3 flex-wrap">
                    <div className="flex items-center gap-1 text-xs font-semibold text-on-surface-variant bg-surface px-3 py-1 rounded-lg">
                      <span className="material-symbols-outlined text-primary text-[16px]">settings</span>
                      {car.transmission}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-on-surface-variant bg-surface px-3 py-1 rounded-lg">
                      <span className="material-symbols-outlined text-secondary text-[16px]">airline_seat_recline_extra</span>
                      {car.seats} Kursi
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-on-surface-variant bg-surface px-3 py-1 rounded-lg">
                      <span className="material-symbols-outlined text-primary text-[16px]">local_gas_station</span>
                      {car.fuel}
                    </div>
                  </div>
                  <div className="flex items-end justify-between pt-4 border-t border-outline-variant/30">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Mulai dari</span>
                      <span className="font-headline font-bold text-xl text-primary">Rp {car.rate}<span className="text-on-surface-variant font-body text-xs">/hari</span></span>
                    </div>
                    <button
                      id={`fleet-book-${index}`}
                      onClick={() => openWA(WA_MESSAGES.fleet(car.name))}
                      className="brand-gradient text-white px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all glow-shadow-primary"
                    >
                      Pesan via WA
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <TrustSignals />
      <FAQ />
    </div>
  );
}
