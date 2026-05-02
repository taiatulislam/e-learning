import CategoriesSection from "@/components/CategoriesSection";
import { FAQ } from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import PopularCourses from "@/components/PopularCourses";
import Stories from "@/components/Stories";
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
    </div>
  );
}
