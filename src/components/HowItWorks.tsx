import { howItWorksSteps as steps } from '../data/content';

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 md:px-12 bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4 text-on-surface">Cara Kerja RentalKita</h2>
          <p className="text-on-surface-variant font-body mb-8 max-w-xl mx-auto">Proses sewa yang sederhana tanpa ribet. Perjalanan Anda siap dalam 4 langkah mudah.</p>
          <div className="w-16 h-1.5 brand-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-outline-variant/50 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-outline-variant shadow-sm flex items-center justify-center mb-6 group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                <span className="material-symbols-outlined text-[32px] text-primary group-hover:text-secondary group-hover:scale-110 transition-all">{step.icon}</span>
              </div>
              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm absolute top-0 right-[20%] md:right-[30%] lg:right-[20%] shadow-md border-2 border-white">
                {index + 1}
              </div>
              <h4 className="font-headline text-xl font-bold text-on-surface mb-3">{step.title}</h4>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
