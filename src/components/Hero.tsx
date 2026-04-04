import { openWA, WA_MESSAGES } from '../utils/whatsapp';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[850px] flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 bg-black">
        <img
          alt="Premium car driving into the sunset"
          className="w-full h-full object-cover scale-105 opacity-60"
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=2500&q=80"
        />
        {/* Soft immersive dark gradients to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-surface"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-xs tracking-widest uppercase mb-10 shadow-lg float-hover">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Kapanpun. Dimanapun.
        </div>
        
        {/* Cinematic Headline */}
        <h1 className="font-headline text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.05] mb-8 text-white tracking-tight">
          Eksplorasi Tanpa <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">Batas.</span>
        </h1>
        
        {/* Description */}
        <p className="text-white/80 text-lg md:text-xl font-body leading-relaxed max-w-2xl mb-12 drop-shadow-md">
          Sewa mobil terbaik dengan fasilitas premium, asuransi lengkap, dan dukungan pelanggan 24/7. Waktunya Anda yang mengemudikan cerita perjalanan.
        </p>
        
        {/* Primary Actions */}
        <div className="flex flex-col sm:flex-row gap-5 mb-16">
          <button
            id="hero-cta-book"
            onClick={() => openWA(WA_MESSAGES.booking())}
            className="brand-gradient glow-shadow-primary text-white px-10 py-5 rounded-full font-bold text-[15px] tracking-wide hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl"
          >
            Booking Sekarang
            <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
          </button>
          <button
            id="hero-cta-fleet"
            onClick={() => openWA(WA_MESSAGES.general)}
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold text-[15px] tracking-wide hover:bg-white hover:text-primary transition-all duration-300 shadow-xl"
          >
            Lihat Koleksi Armada
          </button>
        </div>

        {/* Text-based Trust Features under buttons */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[14px] text-green-400">check</span>
            </div>
            <span className="text-white/90 text-sm font-medium tracking-wide">Bebas Biaya Pembatalan</span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/30"></div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[14px] text-green-400">check</span>
            </div>
            <span className="text-white/90 text-sm font-medium tracking-wide">Mobil Keluaran Terbaru</span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/30"></div>
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[14px] text-green-400">check</span>
            </div>
            <span className="text-white/90 text-sm font-medium tracking-wide">Bantuan Darurat 24/7</span>
          </div>
        </div>

      </div>
    </section>
  );
}
