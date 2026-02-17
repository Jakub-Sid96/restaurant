import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import SignatureDish from "@/components/SignatureDish";
import SignatureCocktail from "@/components/SignatureCocktail";
import BestSellers from "@/components/BestSellers";
import PhotoGallery from "@/components/PhotoGallery";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <SignatureDish />
        <SignatureCocktail />
        <BestSellers />
        <PhotoGallery />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
