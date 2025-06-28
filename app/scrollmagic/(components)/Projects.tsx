"use client";

import ScrollMagic from "scrollmagic";
import { useEffect } from "react";

const projectList = [
  {
    title: "Emergency Aid. WAR 2022.",
    description:
      "providing food and medicine to the shelters and animals which lost their homes and families due to the war",
    latar: "bg-[#000000]",
  },
  {
    title: "Non-commercial feed line",
    description: "construction of industrial production base where food for shelters will be produced on a free basis",
    latar: "bg-ijo",
  },
  {
    title: "Education and Control",
    description: "lectures on communication, organisation and coordination of processes, control over the use of aid",
    latar: "bg-ping",
  },
];

export default function Projects() {
  useEffect(() => {
    let controller: ScrollMagic.Controller;

    const loadScrollMagic = async () => {
      const ScrollMagic = (await import("scrollmagic")).default;

      controller = new ScrollMagic.Controller();

      const revealElements = document.getElementsByClassName("project");

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
    <section id="projects" className="bg-biru *:text-white">
      <div className="container">
        <div>
          <h2>Our projects</h2>
          <p>are very different in terms of priority, scale and complexity of implementation</p>
        </div>
        <div className="flex flex-col justify-center space-y-7 pt-2 w-full">
          {projectList.map((item, i) => (
            <div key={i} className={`project relative w-full`}>
              <div className={`absolute ${item.latar} inset-0`} />
              <div className="relative z-10 border-[4px] p-10 bg-inherit hover:-translate-y-3 hover:translate-x-3 transition ease-linear">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
