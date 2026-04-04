import { openWA, WA_MESSAGES } from '../utils/whatsapp';
import TrustSignals from '../components/TrustSignals';

const services = [
  {
    icon: "car_rental",
    title: "Sewa Lepas Kunci",
    description: "Nikmati privasi dan kebebasan penuh dengan menyewa mobil lepas kunci untuk perjalanan dalam maupun luar kota.",
    price: "Mulai dari Rp 250.000/hari",
    waMsg: WA_MESSAGES.general,
  },
  {
    icon: "person",
    title: "Sewa dengan Supir",
    description: "Lebih santai dan aman. Supir profesional kami siap mengantar Anda ke tempat tujuan tanpa khawatir rute dan kemacetan.",
    price: "Mulai dari Rp 400.000/hari",
    waMsg: WA_MESSAGES.general,
  },
  {
    icon: "flight_land",
    title: "Antar-Jemput Bandara",
    description: "Layanan drop-off atau pick-up tepat waktu ke semua bandara utama dengan pilihan armada premium yang nyaman.",
    price: "Mulai dari Rp 150.000/trip",
    waMsg: WA_MESSAGES.airport(),
  },
  {
    icon: "domain",
    title: "Sewa Jangka Panjang (Corporate)",
    description: "Solusi mobilitas untuk perusahaan Anda. Sewa bulanan hingga tahunan dengan biaya lebih hemat dan tanggungan perawatan penuh.",
    price: "Hubungi untuk Penawaran",
    waMsg: WA_MESSAGES.corporate(),
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen flex flex-col bg-surface">
      {/* Services Header */}
      <section className="bg-primary pt-20 pb-24 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6">
            <span className="material-symbols-outlined text-[14px]">handshake</span>
            Layanan Kami
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6">Layanan Kami</h1>
          <p className="text-white/80 font-body text-lg leading-relaxed">
            Menghadirkan solusi mobilitas terlengkap untuk segala kebutuhan perjalanan Anda. Kualitas pelayanan nomor satu adalah komitmen kami.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 py-20 -mt-10 relative z-20 max-w-screen-xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-outline-variant/30 float-hover group flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary text-[32px]">{service.icon}</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">{service.title}</h3>
              <p className="text-on-surface-variant font-body leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm tracking-wide">
                  {service.price}
                </div>
                <button
                  id={`service-book-${index}`}
                  onClick={() => openWA(service.waMsg)}
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all hover:scale-105 shadow-md"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Pesan via WA
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reused Trust Signals */}
      <TrustSignals />
    </div>
  );
}
