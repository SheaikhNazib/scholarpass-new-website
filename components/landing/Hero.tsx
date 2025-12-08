import HeroSection from "./HeroSection";
// import ScholarPassPlusSection from "./ScholarPassPlusSection";
// import ScholarshipListingsSection from "./ScholarshipListingsSection";
// import K12TutoringSection from "./K12TutoringSection";
import CareerBootcampsSection from "./CareerBootcampsSection";
import InstitutesDirectorySection from "./InstitutesDirectorySection";
// import LearningDevicesSection from "./LearningDevicesSection";
import EdupreneurSection from "./EdupreneurSection";
// import ScholarPassLaunchpadSection from "./ScholarPassLaunchpadSection";
// import LearningHubNetworkSection from "./LearningHubNetworkSection";
// import TestimonialsSection from "./TestimonialsSection";
import FinalCtaSection from "./FinalCtaSection";

export default function HomePage() {
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
