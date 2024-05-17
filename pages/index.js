import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Counter from "../src/components/Counter";
import Home from "../src/components/Home";
// import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layouts/Layout";
import CoolDivider from "../src/components/CoolDivider";
import SplineBackground from '../src/components/SplineBackground';
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);
  return (
    <Layout dark>
     <SplineBackground /> 
      <Home />
      <CoolDivider />
      <About />
      <CoolDivider />
      <Skills />
      <CoolDivider />
      <Portfolio />
      <CoolDivider />
      <Service dark />
      <CoolDivider />
      <Resume />
      <CoolDivider />
      <Contact />
    </Layout>
  );
};

export default Index;