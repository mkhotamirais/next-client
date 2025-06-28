"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import ScrollMagic from "scrollmagic";
import { useEffect } from "react";
import { helpList } from "../lists";

export default function Help() {
  useEffect(() => {
    let controller: ScrollMagic.Controller;

    const loadScrollMagic = async () => {
      const ScrollMagic = (await import("scrollmagic")).default;

      controller = new ScrollMagic.Controller();

      const revealElements = document.getElementsByClassName("bantu");

      for (let i = 0; i < revealElements.length; i++) {
        new ScrollMagic.Scene({
          triggerElement: revealElements[i],
          offset: 50,
          triggerHook: 0.9,
        })
          .setClassToggle(revealElements[i], "visible")
          .addTo(controller);
      }

      new ScrollMagic.Scene({
        triggerElement: "#btn-bantu",
        offset: 50,
        triggerHook: 0.9,
      })
        .setClassToggle("#btn-bantu", "visible")
        .addTo(controller);
    };

    if (typeof window !== "undefined") loadScrollMagic();

    return () => controller.destroy(true);
  }, []);

  return (
    <section id="help" className="bg-kuning">
      <div className="container">
        <div>
          <h2>We want to help</h2>
          <p>homeless packs, volunteers, guardians, overstayers, shelters and other organisations</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 pt-4 pb-8">
          {helpList.map((item, i) => (
            <div key={i} className="bantu relative">
              <div className="absolute inset-0 bg-white" />
              <p className="lg:text-[2vw] relative z-10 hover:-translate-y-3 hover:translate-x-3 border-[3px] py-6 px-4 h-full border-black transition ease-linear text-center flex items-center justify-center">
                {item}
              </p>
            </div>
          ))}
        </div>
        <button
          id="btn-bantu"
          type="button"
          className="group flex items-center gap-4 border-[3px] border-black bg-pink-300 py-[1vw] px-[4vw] text-center"
        >
          <span className="text-[2vw] font-bold block">apply for help</span>
          <FaArrowRightLong className="text-[3vw] group-hover:translate-x-2 transition" />
        </button>
      </div>
    </section>
  );
}
