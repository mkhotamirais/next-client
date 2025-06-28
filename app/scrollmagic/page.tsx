import React from "react";
import Hero from "./(components)/Hero";
import About from "./(components)/About";
import Projects from "./(components)/Projects";
import Help from "./(components)/Help";
import Team from "./(components)/Team";
import Citizens from "./(components)/Citizens";
import Partners from "./(components)/Partners";
import Contact from "./(components)/Contact";

export default function Scrollmagic() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Help />
      <Team />
      <Citizens />
      <Partners />
      <Contact />
    </>
  );
}
