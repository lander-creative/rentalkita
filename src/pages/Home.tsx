import Hero from '../components/Hero';
import BookingBar from '../components/BookingBar';
import FeaturedFleet from '../components/FeaturedFleet';
import HowItWorks from '../components/HowItWorks';
import PromoBanner from '../components/PromoBanner';
import Testimonials from '../components/Testimonials';
import TrustSignals from '../components/TrustSignals';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <BookingBar />
      <FeaturedFleet />
      <HowItWorks />
      <PromoBanner />
      <Testimonials />
      <TrustSignals />
      <FAQ />
    </>
  );
}
