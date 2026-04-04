export default function AppPromo() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto brand-gradient rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
        
        {/* Background Decorations */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

        <div className="relative z-10 w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Sewa Lebih Cepat Melalui Aplikasi Kami
          </h2>
          <p className="text-white/80 font-body mb-8 text-lg max-w-lg mx-auto md:mx-0">
            Dapatkan diskon eksklusif 20% untuk penyewaan pertama Anda melalui aplikasi RentalKita. Tersedia untuk iOS dan Android.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-surface text-primary px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg text-sm">
              <span className="material-symbols-outlined text-[24px]">apple</span>
              App Store
            </button>
            <button className="bg-surface text-primary px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg text-sm">
              <span className="material-symbols-outlined text-[24px]">shop</span>
              Google Play
            </button>
          </div>
        </div>

        <div className="relative z-10 w-full md:w-5/12 flex justify-center md:justify-end">
          <div className="w-[280px] h-[500px] bg-white rounded-[2rem] border-8 border-surface-container-high shadow-2xl overflow-hidden relative rotate-2 hover:rotate-0 transition-all duration-500">
            {/* Mockup Mobile UI Inside */}
            <div className="w-full h-full bg-surface-container-low flex flex-col pt-8 px-5">
              <div className="w-1/2 h-5 bg-outline-variant/30 rounded-full mb-6 relative"></div>
              <div className="w-full h-40 bg-white rounded-2xl shadow-sm mb-4"></div>
              <div className="w-full h-24 bg-white rounded-2xl shadow-sm mb-4"></div>
              <div className="w-full h-24 bg-white rounded-2xl shadow-sm mb-4"></div>
              <div className="w-full h-24 bg-white rounded-2xl shadow-sm mb-4"></div>
            </div>
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/40 pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
