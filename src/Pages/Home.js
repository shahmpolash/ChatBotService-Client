import React from "react";
import Banner from "../components/Banner";
import AboutUs from "../components/HomePage/AboutUs";
import OurSpeciality from "../components/HomePage/OurSpeciality";
import Testimonials from "../components/HomePage/Testimonials";
import ContactPage from "./ContactPage";
import CtaSection from "../components/HomePage/CtaSection";
import PricePage from "./PricePage";
import WhyChoose from "../components/HomePage/WhyChoose";
import WeProvideList from "../components/HomePage/WeProvideList";
import WorkingProcess from "../components/HomePage/WorkingProcess";
import HowToHelp from "../components/HomePage/HowToHelp";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowToHelp></HowToHelp>

      <AboutUs></AboutUs>
      <WhyChoose></WhyChoose>
      <OurSpeciality></OurSpeciality>

      <WorkingProcess></WorkingProcess>
      <Testimonials></Testimonials>
      <PricePage></PricePage>
      <ContactPage></ContactPage>
      <CtaSection></CtaSection>

      {/* <WeProvideList></WeProvideList> */}
    </div>
  );
};

export default Home;
