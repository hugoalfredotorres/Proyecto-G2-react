import Featured from "../components/Featured";
import HealthSpecialities from "../components/HealthSpecialities";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Mission from "../components/Mission";
import OurDoctors from "../components/OurDoctors";
import Testimonial from "../components/Testimonial";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <HealthSpecialities />
      <Mission />
      <Featured />
      <HowItWorks />
      <WhyChooseUs />
      <OurDoctors />
     
      
    </div>
  );
};
export default Home;
