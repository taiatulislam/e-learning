import CategoriesSection from "@/components/CategoriesSection";
import HeroSection from "@/components/HeroSection";
import PopularCourses from "@/components/PopularCourses";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <TrustSection />
      <PopularCourses />
    </div>
  );
}
