import { useState } from 'react';
import { openWA, WA_MESSAGES } from '../utils/whatsapp';

export default function BookingBar() {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const formatDate = (d: string) => {
    if (!d) return '';
    const dt = new Date(d);
    return dt.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const handleSearch = () => {
    openWA(WA_MESSAGES.booking(
      undefined,
      formatDate(startDate),
      formatDate(endDate),
      location || undefined,
    ));
  };

  return (
    <section className="relative -mt-12 md:-mt-20 z-20 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Card wrapper with premium glass effect */}
      <div className="relative">
        {/* Glow behind the card */}
        <div className="absolute -inset-1 brand-gradient opacity-20 blur-2xl rounded-[2rem] pointer-events-none" />

        <div className="relative bg-white rounded-[1.75rem] shadow-2xl border border-outline-variant/20 overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1 w-full brand-gradient" />

          {/* Content */}
          <div className="flex flex-col md:flex-row items-stretch gap-0">

            {/* Location field */}
            <label
              htmlFor="booking-location"
              className="flex-1 flex flex-col px-5 md:px-7 py-4 md:py-5 cursor-pointer hover:bg-blue-50/50 transition-colors group border-b md:border-b-0 md:border-r border-outline-variant/20"
            >
              <span className="text-[9px] uppercase tracking-[0.15em] text-primary font-extrabold mb-1.5 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[13px]">location_on</span>
                Lokasi Penjemputan
              </span>
              <input
                id="booking-location"
                className="bg-transparent border-none focus:ring-0 text-sm font-semibold text-on-surface p-0 w-full outline-none placeholder:font-normal placeholder:text-on-surface-variant/50"
                placeholder="Kota atau bandara tujuan"
                type="text"
                value={location}
                onChange={e => setLocation(e.target.value)}
                autoComplete="off"
              />
            </label>

            {/* Tanggal Mulai */}
            <label
              htmlFor="booking-start"
              className="flex-1 flex flex-col px-5 md:px-7 py-4 md:py-5 cursor-pointer hover:bg-blue-50/50 transition-colors group border-b md:border-b-0 md:border-r border-outline-variant/20"
            >
              <span className="text-[9px] uppercase tracking-[0.15em] text-primary font-extrabold mb-1.5 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[13px]">calendar_month</span>
                Tanggal Mulai
              </span>
              <input
                id="booking-start"
                className="bg-transparent border-none focus:ring-0 text-sm font-semibold text-on-surface p-0 w-full outline-none"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
            </label>

            {/* Tanggal Selesai */}
            <label
              htmlFor="booking-end"
              className="flex-1 flex flex-col px-5 md:px-7 py-4 md:py-5 cursor-pointer hover:bg-blue-50/50 transition-colors group border-b md:border-b-0 border-outline-variant/20"
            >
              <span className="text-[9px] uppercase tracking-[0.15em] text-primary font-extrabold mb-1.5 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[13px]">event_available</span>
                Tanggal Selesai
              </span>
              <input
                id="booking-end"
                className="bg-transparent border-none focus:ring-0 text-sm font-semibold text-on-surface p-0 w-full outline-none"
                type="date"
                min={startDate || new Date().toISOString().split('T')[0]}
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </label>

            {/* CTA Button */}
            <div className="p-3 md:p-3">
              <button
                id="booking-bar-cta"
                onClick={handleSearch}
                className="brand-gradient glow-shadow-primary w-full h-full md:w-auto px-7 py-3.5 rounded-2xl text-white font-bold text-sm tracking-wide hover:scale-[1.03] transition-all flex items-center justify-center gap-2.5 group min-w-[150px]"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Chat & Pesan</span>
              </button>
            </div>
          </div>

          {/* Bottom quick-hints */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 px-5 md:px-7 py-3 bg-surface-container-lowest border-t border-outline-variant/15">
            {[
              { icon: 'check_circle', text: 'Bebas biaya pembatalan' },
              { icon: 'bolt', text: 'Respon cepat via WhatsApp' },
              { icon: 'local_offer', text: 'Harga terbaik dijamin' },
            ].map(h => (
              <div key={h.text} className="flex items-center gap-1.5 text-[11px] text-on-surface-variant font-medium">
                <span className="material-symbols-outlined text-[14px] text-green-500">{h.icon}</span>
                {h.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
