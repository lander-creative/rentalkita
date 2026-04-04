import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { openWA, WA_MESSAGES } from '../utils/whatsapp';

const navLinks = [
  { path: '/', label: 'Beranda', icon: 'home' },
  { path: '/armada', label: 'Armada', icon: 'directions_car' },
  { path: '/layanan', label: 'Layanan', icon: 'handshake' },
  { path: '/tentang', label: 'Tentang Kami', icon: 'info' },
  { path: '/kontak', label: 'Kontak', icon: 'mail' },
];

export default function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    return `font-body font-bold text-sm tracking-wide transition-colors ${
      isActive
        ? 'text-primary'
        : 'text-on-surface hover:text-primary'
    }`;
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-300 px-6 md:px-12 ${
          scrolled || menuOpen
            ? 'py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-outline-variant/30'
            : 'py-4 backdrop-blur-md bg-white/70 border-b border-outline-variant/30'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <img src="/favicon.svg" alt="RentalKita Logo" className="w-10 h-10 rounded-xl group-hover:scale-105 transition-transform shadow-md" />
            <span className="font-headline font-extrabold text-2xl tracking-tight text-on-surface">
              Rental<span className="text-primary">Kita</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} className={getLinkClasses(link.path)}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            id="navbar-cta"
            onClick={() => openWA(WA_MESSAGES.booking())}
            className="hidden md:inline-flex items-center gap-2 brand-gradient glow-shadow-primary text-white px-7 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 active:scale-95 shadow-md"
          >
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            Sewa Sekarang
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full hover:bg-surface-container-low transition-colors"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-on-surface rounded-full transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-on-surface rounded-full transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-on-surface rounded-full transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          menuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col pt-20 pb-8 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Brand in drawer */}
          <div className="px-6 mb-6 pb-5 border-b border-outline-variant/30">
            <div className="flex items-center gap-2">
              <img src="/favicon.svg" alt="RentalKita Logo" className="w-9 h-9 rounded-xl" />
              <span className="font-headline font-extrabold text-xl text-on-surface">
                Rental<span className="text-primary">Kita</span>
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col px-4 gap-1 flex-grow">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`mobile-nav-${link.path.replace('/', '') || 'home'}`}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-on-surface hover:bg-surface-container-low hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
                  {link.label}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <div className="px-6 mt-4">
            <button
              id="mobile-cta-book"
              onClick={() => openWA(WA_MESSAGES.booking())}
              className="w-full flex items-center justify-center gap-2 brand-gradient text-white py-4 rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              Sewa Sekarang
            </button>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-2xl font-bold text-sm hover:bg-[#1ebe5d] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Kami
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
