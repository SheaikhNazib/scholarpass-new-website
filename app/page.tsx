import HeroSection from "@/components/landing/HeroSection";
// import ScholarPassPlusSection from "@/components/landing/ScholarPassPlusSection";
// import ScholarshipListingsSection from "@/components/landing/ScholarshipListingsSection";
// import K12TutoringSection from "@/components/landing/K12TutoringSection";
import CareerBootcampsSection from "@/components/landing/CareerBootcampsSection";
import InstitutesDirectorySection from "@/components/landing/InstitutesDirectorySection";
// import LearningDevicesSection from "@/components/landing/LearningDevicesSection";
import EdupreneurSection from "@/components/landing/EdupreneurSection";
// import ScholarPassLaunchpadSection from "@/components/landing/ScholarPassLaunchpadSection";
// import LearningHubNetworkSection from "@/components/landing/LearningHubNetworkSection";
// import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      {/* <ScholarPassPlusSection /> */}
      {/* <ScholarshipListingsSection /> */}
      {/* <K12TutoringSection /> */}
      <CareerBootcampsSection />
      <InstitutesDirectorySection />
      {/* <LearningDevicesSection /> */}
      <EdupreneurSection />
      {/* <ScholarPassLaunchpadSection /> */}
      {/* <LearningHubNetworkSection /> */}
      {/* <TestimonialsSection /> */}
      <FinalCtaSection />
    </div>
  );
}
