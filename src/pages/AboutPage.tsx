import { openWA, WA_MESSAGES } from '../utils/whatsapp';

const stats = [
  { value: "10.000+", label: "Pelanggan Puas", icon: "people" },
  { value: "500+", label: "Unit Armada", icon: "directions_car" },
  { value: "50+", label: "Kota Dilayani", icon: "location_city" },
  { value: "4.9★", label: "Rating Rata-Rata", icon: "star" },
];

const team = [
  {
    name: "Rizky Pratama",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
    quote: "Kami percaya mobilitas yang mudah adalah hak setiap orang."
  },
  {
    name: "Anisa Putri",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300",
    quote: "Standar layanan kami tidak pernah dikompromikan."
  },
  {
    name: "Deni Saputra",
    role: "Fleet Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300",
    quote: "Setiap unit yang keluar harus dalam kondisi terbaik."
  },
];

const values = [
  {
    icon: "verified",
    title: "Kepercayaan",
    description: "Transparansi harga dan kondisi kendaraan tanpa ada biaya tersembunyi. Kepercayaan Anda adalah aset terbesar kami."
  },
  {
    icon: "handshake",
    title: "Pelayanan",
    description: "Tim kami siap 24/7 untuk memastikan perjalanan Anda selalu lancar dari awal hingga akhir."
  },
  {
    icon: "workspace_premium",
    title: "Kualitas",
    description: "Setiap kendaraan menjalani pemeriksaan ketat sebelum diberikan kepada pelanggan, tanpa pengecualian."
  },
  {
    icon: "eco",
    title: "Keberlanjutan",
    description: "Kami aktif memperluas armada kendaraan ramah lingkungan sebagai komitmen terhadap bumi yang lebih baik."
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen flex flex-col bg-surface">

      {/* Hero Header */}
      <section className="relative bg-primary pt-20 pb-36 px-6 md:px-12 text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6">
            <span className="material-symbols-outlined text-[14px]">info</span>
            Tentang Kami
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Mitra Perjalanan<br />Terpercaya Anda
          </h1>
          <p className="text-white/80 font-body text-lg leading-relaxed max-w-2xl mx-auto">
            RentalKita lahir dari keyakinan bahwa setiap orang berhak mendapatkan pengalaman mobilitas yang nyaman, aman, dan terjangkau di seluruh penjuru Indonesia.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="-mt-14 relative z-20 px-6 md:px-12 max-w-screen-xl mx-auto w-full">
        <div className="glass-panel rounded-3xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-[28px]">{stat.icon}</span>
              </div>
              <span className="font-headline text-3xl font-extrabold text-on-surface">{stat.value}</span>
              <span className="text-on-surface-variant text-sm font-body font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <span className="material-symbols-outlined text-[14px]">history</span>
              Cerita Kami
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
              Dimulai dari Garasi,<br />
              <span className="text-primary">Kini Melayani Indonesia</span>
            </h2>
            <div className="space-y-5 text-on-surface-variant font-body leading-relaxed">
              <p>
                RentalKita didirikan pada 2018 dengan hanya 3 unit kendaraan dan tekad besar untuk menghadirkan layanan sewa mobil yang jujur dan terpercaya.
              </p>
              <p>
                Kami melihat bahwa banyak pelanggan kecewa dengan layanan yang tidak transparan — harga tak jelas, kendaraan tak terawat, dan dukungan yang tidak responsif. Kami hadir untuk mengubah itu semua.
              </p>
              <p>
                Kini dengan lebih dari 500 unit armada dan melayani 50+ kota, RentalKita telah menjadi salah satu penyedia layanan mobilitas terpercaya di Indonesia.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={() => openWA(WA_MESSAGES.booking())} className="brand-gradient text-white px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-all glow-shadow-primary">
                Sewa Sekarang
              </button>
              <button onClick={() => openWA(WA_MESSAGES.general)} className="border-2 border-outline-variant text-on-surface px-8 py-3.5 rounded-full font-bold hover:border-primary hover:text-primary transition-all">
                Hubungi Kami
              </button>
            </div>
          </div>

          {/* Image collage */}
          <div className="relative h-[420px] hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=700"
              alt="RentalKita fleet"
              className="absolute top-0 left-0 w-[70%] h-72 object-cover rounded-3xl shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=400"
              alt="Customer service"
              className="absolute bottom-0 right-0 w-[55%] h-52 object-cover rounded-3xl shadow-xl border-4 border-white"
            />
            <div className="absolute bottom-12 left-8 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-outline-variant/20">
              <div className="w-10 h-10 rounded-full brand-gradient flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[18px]">verified</span>
              </div>
              <div>
                <p className="font-headline font-bold text-on-surface text-sm">Terpercaya Sejak 2018</p>
                <p className="text-xs text-on-surface-variant font-body">Lebih dari 6 tahun melayani</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-low border-t border-b border-outline-variant/30">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              <span className="material-symbols-outlined text-[14px]">favorite</span>
              Nilai Kami
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-4">Apa yang Mendorong Kami</h2>
            <p className="text-on-surface-variant font-body max-w-xl mx-auto">
              Empat pilar utama yang menjadi fondasi setiap keputusan bisnis dan layanan yang kami berikan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-outline-variant/30 float-hover group text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[32px]">{val.icon}</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">{val.title}</h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              <span className="material-symbols-outlined text-[14px]">group</span>
              Tim Kami
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-4">Orang-Orang di Balik RentalKita</h2>
            <p className="text-on-surface-variant font-body max-w-xl mx-auto">
              Didedikasikan sepenuhnya untuk memberikan pengalaman terbaik bagi setiap pelanggan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-outline-variant/30 float-hover group text-center shadow-sm">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">{member.name}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-4">{member.role}</p>
                  <p className="text-on-surface-variant font-body text-sm italic leading-relaxed">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 md:px-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-800 opacity-80 pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">Siap Memulai Perjalanan?</h2>
          <p className="text-white/80 font-body text-lg mb-8">Bergabunglah dengan ribuan pelanggan yang telah mempercayakan perjalanan mereka kepada RentalKita.</p>
          <button
            id="about-cta-book"
            onClick={() => openWA(WA_MESSAGES.booking())}
            className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-all duration-300 shadow-xl hover:scale-105"
          >
            Booking Sekarang
          </button>
        </div>
      </section>
    </div>
  );
}
