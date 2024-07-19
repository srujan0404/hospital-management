import React from "react";
import Hero from "../components/Hero";
import ServicesList from "../components/ServicesList";

const Services = () => {
  return (
    <>
      <Hero
        title={"Our Services | ZeeCare Medical Institute"}
        imageUrl={"/services.png"}
      />
      <ServicesList />
    </>
  );
};

export default Services;
