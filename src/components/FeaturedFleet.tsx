import { openWA, WA_MESSAGES } from '../utils/whatsapp';

import { cars } from '../data/content';

export default function FeaturedFleet() {
  return (
    <section className="py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-on-surface">Pilihan Armada Terbaik</h2>
            <p className="text-on-surface-variant font-body leading-relaxed">
              Kami menyediakan berbagai tipe kendaraan yang dirawat secara berkala untuk memastikan kenyamanan dan keamanan perjalanan Anda.
            </p>
          </div>
          <button
            onClick={() => openWA(WA_MESSAGES.general)}
            className="text-primary font-bold hover:text-secondary transition-colors flex items-center gap-1 shrink-0"
          >
            Lihat Semua Armada
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div 
              key={index} 
              className={`group bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant/40 float-hover ${car.isOffset ? 'lg:translate-y-8' : ''}`}
            >
              <div className="relative h-56 overflow-hidden rounded-t-3xl">
                <img 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  src={car.image} 
                />
                <span 
                  className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${car.highlight ? 'accent-gradient text-white shadow-md' : 'bg-white/90 backdrop-blur-md text-primary font-semibold'}`}
                >
                  {car.tag}
                </span>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-headline text-2xl font-bold mb-2 text-on-surface">{car.name}</h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed font-body">{car.description}</p>
                <div className="flex items-center justify-between pt-5 border-t border-outline-variant/30">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface group-hover:bg-primary/5 transition-colors">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        {car.transmissionIcon || "settings"}
                      </span>
                      <span className="text-xs font-semibold text-on-surface">{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface group-hover:bg-secondary/5 transition-colors">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        {car.fuelIcon || "local_gas_station"}
                      </span>
                      <span className="text-xs font-semibold text-on-surface">{car.fuel}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Mulai Dari</span>
                    <span className="text-xl font-headline font-bold text-primary">Rp {car.rate}</span>
                  </div>
                </div>
                {/* WA Book Button */}
                <button
                  id={`fleet-book-${index}`}
                  onClick={() => openWA(WA_MESSAGES.fleet(car.name))}
                  className="mt-5 w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 rounded-2xl text-sm transition-all hover:scale-[1.02] shadow-md hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Pesan via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
