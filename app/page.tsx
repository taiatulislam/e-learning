import CategoriesSection from "@/components/CategoriesSection";
import { FAQ } from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PopularCourses from "@/components/PopularCourses";
import Stories from "@/components/Stories";
import Trial from "@/components/Trial";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <TrustSection />
      <PopularCourses />
      <Stories />
      <FAQ />
      <Trial />
      <Footer />
    </div>
  );
}
