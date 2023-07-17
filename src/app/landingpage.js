"use client";

// import FeatureProduct from "./components/FeatureProduct";
// import HeroSection from "./component/herosection";
// import Services from "./component/services";
// import Trusted from "./component/trusted";
// import FeatureProduct from "./component/featureproduct";
import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('./component/herosection'), {
  loading: () => <p>Loading...</p>,
})
const Services = dynamic(() => import('./component/services'), {
  loading: () => <p>Loading...</p>,
})
const Trusted = dynamic(() => import('./component/trusted'), {
  loading: () => <p>Loading...</p>,
})
const FeatureProduct = dynamic(() => import('./component/featureproduct'), {
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
