import { reviews } from '../data/content';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-on-surface">Apa Kata Pelanggan Kami</h2>
            <p className="text-on-surface-variant font-body leading-relaxed">
              Ribuan pelanggan telah mempercayakan perjalanan mereka bersama RentalKita.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-low transition-colors text-on-surface">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors text-white shadow-md">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-surface-container rounded-3xl p-8 border border-outline-variant/30 shadow-sm float-hover">
              <div className="flex gap-1 text-secondary mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                ))}
              </div>
              <p className="text-on-surface-variant font-body leading-relaxed mb-8 italic">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover shadow-sm" />
                <div>
                  <h5 className="font-headline font-bold text-on-surface">{review.name}</h5>
                  <p className="text-xs text-on-surface-variant font-body">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
