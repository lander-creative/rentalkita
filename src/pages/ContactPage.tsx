import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-surface">
      {/* Contact Header */}
      <section className="bg-primary pt-20 pb-24 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6">Hubungi Kami</h1>
          <p className="text-white/80 font-body text-lg leading-relaxed">
            Punya pertanyaan seputar tarif, kolaborasi bisnis, atau ketersediaan armada? Tim layanan pelanggan kami siap membantu Anda 24 jam sehari.
          </p>
        </div>
      </section>

      {/* Render Contact Component */}
      <div className="-mt-16 md:-mt-24 relative z-20 pb-20">
        <Contact />
      </div>
    </div>
  );
}
