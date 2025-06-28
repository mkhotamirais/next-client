"use client";

import Image from "next/image";
import ScrollMagic from "scrollmagic";
import { useEffect } from "react";
import { partnerList } from "../lists";

export default function Partners() {
  useEffect(() => {
    let controller: ScrollMagic.Controller;

    const loadScrollMagic = async () => {
      const ScrollMagic = (await import("scrollmagic")).default;

      controller = new ScrollMagic.Controller();

      const revealElements = document.getElementsByClassName("partner");

      for (let i = 0; i < revealElements.length; i++) {
        new ScrollMagic.Scene({
          triggerElement: revealElements[i],
          offset: 50,
          triggerHook: 0.9,
        })
          .setClassToggle(revealElements[i], "visible")
          .addTo(controller);
      }
    };

    if (typeof window !== "undefined") loadScrollMagic();

    return () => controller.destroy(true);
  }, []);

  return (
    <section id="partners">
      <div className="container">
        <div>
          <h2>Out partners</h2>
          <p>are take care of our fund and help us with many questions</p>
        </div>
        <div className="pt-4 grid grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-4 gap-14">
          {partnerList.map((item, i) => (
            <Image
              key={i}
              src={`${item}`}
              width={200}
              height={200}
              alt={item || "image parter"}
              className="partner object-center object-contain h-24 w-72 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
