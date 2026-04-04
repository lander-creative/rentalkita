import { useState, useEffect } from 'react';
import { openWA, WA_MESSAGES } from '../utils/whatsapp';

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const fmt = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 brand-gradient opacity-95" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=2400&q=60')] bg-cover bg-center opacity-10 mix-blend-overlay" />

      {/* Decorative orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Penawaran Terbatas
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Hemat hingga <span className="text-yellow-300">30%</span><br />
            untuk Sewa Weekend!
          </h2>
          <p className="text-white/80 font-body text-lg leading-relaxed max-w-2xl mb-8">
            Gunakan kode <span className="font-bold text-white bg-white/20 rounded-lg px-2 py-0.5 font-mono tracking-wider">WEEKEND30</span> saat booking. Berlaku untuk semua unit, setiap Jumat–Minggu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              id="promo-cta-primary"
              onClick={() => openWA(WA_MESSAGES.promo())}
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-white text-primary font-bold text-[15px] hover:bg-secondary hover:text-white transition-all duration-300 shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Klaim Promo via WhatsApp
            </button>
          </div>
        </div>

        {/* Right: Countdown Timer */}
        <div className="flex-shrink-0 glass-countdown rounded-3xl p-8 text-white text-center">
          <p className="font-body text-white/70 text-sm font-bold uppercase tracking-wider mb-5">Promo berakhir dalam</p>
          <div className="flex items-center gap-3">
            {[
              { label: 'Jam', value: timeLeft.hours },
              { label: 'Menit', value: timeLeft.minutes },
              { label: 'Detik', value: timeLeft.seconds },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <span className="font-headline font-extrabold text-3xl md:text-4xl tabular-nums">
                      {fmt(item.value)}
                    </span>
                  </div>
                  <span className="text-white/60 text-xs font-bold uppercase tracking-wide mt-2">{item.label}</span>
                </div>
                {i < 2 && (
                  <span className="font-headline font-extrabold text-3xl text-white/50 mb-5">:</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
