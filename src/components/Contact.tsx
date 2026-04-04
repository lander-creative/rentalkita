import { openWA } from '../utils/whatsapp';

export default function Contact() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 border border-outline-variant/50 shadow-xl overflow-hidden relative">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 relative z-10">
          
          {/* Left: Contact Info */}
          <div className="w-full md:w-1/2">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6 text-on-surface">Hubungi Kami</h2>
            <p className="text-on-surface-variant font-body mb-10 leading-relaxed">
              Memiliki pertanyaan khusus atau permintaan armada dalam jumlah besar? Tim kami siap menjawab pesan Anda secepatnya.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <h5 className="font-headline font-bold text-on-surface mb-1">Kantor Pusat</h5>
                  <p className="text-sm text-on-surface-variant font-body">Jl. Sudirman No. 123, SCBD, Jakarta Selatan, 12190</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#25D366]">phone_in_talk</span>
                </div>
                <div>
                  <h5 className="font-headline font-bold text-on-surface mb-1">WhatsApp</h5>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#25D366] font-body font-bold hover:underline"
                  >
                    +62 812-3456-7890
                  </a>
                  <p className="text-xs text-on-surface-variant mt-0.5">Respon cepat, 24 jam</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <h5 className="font-headline font-bold text-on-surface mb-1">Email</h5>
                  <a href="mailto:halo@rentalkita.com" className="text-sm text-primary font-body hover:underline">
                    halo@rentalkita.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick WA Button */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-wa-quick"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-4 rounded-2xl text-sm transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat Langsung via WhatsApp
            </a>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-1/2">
            <form
              onSubmit={e => {
                e.preventDefault();
                const name = (e.currentTarget.querySelector('#contact-name') as HTMLInputElement)?.value;
                const msg = (e.currentTarget.querySelector('#contact-msg') as HTMLTextAreaElement)?.value;
                openWA(`Halo RentalKita! Nama saya *${name}*.\n\n${msg}`);
              }}
              className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 shadow-sm space-y-5"
            >
              <div>
                <label htmlFor="contact-name" className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 block">Nama Lengkap</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-sm font-body outline-none transition-all"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 block">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-sm font-body outline-none transition-all"
                  placeholder="email@contoh.com"
                />
              </div>
              <div>
                <label htmlFor="contact-msg" className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 block">Pesan</label>
                <textarea
                  id="contact-msg"
                  rows={4}
                  required
                  className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-sm font-body outline-none transition-all resize-none"
                  placeholder="Tuliskan pertanyaan atau permintaan Anda..."
                />
              </div>
              <button
                type="submit"
                id="contact-submit"
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-xl tracking-wide hover:scale-[1.02] transition-all text-sm shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Kirim via WhatsApp
              </button>
              <p className="text-center text-xs text-on-surface-variant">Pesan akan dikirim otomatis ke WhatsApp kami</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
