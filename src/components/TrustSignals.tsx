import { trustSignals } from '../data/content';

export default function TrustSignals() {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-white">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4 text-on-surface">Mengapa Memilih Kami?</h2>
          <p className="text-on-surface-variant font-body mb-8 max-w-xl mx-auto">Pengalaman sewa mobil terbaik dengan layanan pelanggan sepenuh hati.</p>
          <div className="w-16 h-1.5 brand-gradient mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {trustSignals.map((signal, index) => (
            <div key={index} className="text-center space-y-6 group">
              <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center float-hover ${signal.color === 'primary' ? 'bg-primary/5 group-hover:bg-primary/10' : 'bg-secondary/5 group-hover:bg-secondary/10'}`}>
                <span className={`material-symbols-outlined text-[40px] ${signal.color === 'primary' ? 'text-primary' : 'text-secondary'}`} data-icon={signal.icon}>{signal.icon}</span>
              </div>
              <h4 className="font-headline text-xl font-bold text-on-surface">{signal.title}</h4>
              <p className="text-on-surface-variant leading-relaxed font-body text-sm">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
