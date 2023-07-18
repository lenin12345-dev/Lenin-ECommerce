"use client";

// import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./component/herosection";
import Services from "./component/services";
// import Trusted from "./component/trusted";
import FeatureProduct from "./component/featureproduct";
import dynamic from 'next/dynamic'
 
const Trusted = dynamic(() => import('./component/trusted'), {
  loading: () => <p>Loading...</p>,
})
 

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default LandingPage;
