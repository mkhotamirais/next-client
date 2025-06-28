"use client";

import { useEffect } from "react";
import ScrollMagic from "scrollmagic";

export default function About() {
  useEffect(() => {
    let controller: ScrollMagic.Controller;

    const loadScrollMagic = async () => {
      const ScrollMagic = (await import("scrollmagic")).default;

      controller = new ScrollMagic.Controller();

      const scene = new ScrollMagic.Scene({
        triggerElement: "#about #yt",
        triggerHook: 0.9,
        duration: "125%",
        offset: 50,
      });
      scene.setClassToggle("#about #yt", "visible");
      controller.addScene(scene);
    };

    if (typeof window !== "undefined") loadScrollMagic();

    return () => controller.destroy(true);
  }, []);

  return (
    <section id="about" className="min-h-screen">
      <div className="container">
        <div>
          <h2>We Are</h2>
          <p>
            team of like-minded people, socially active companies, media personalities, volunteers who help low-income
            shelters and foster carers to support homeless animals.
          </p>
        </div>
        <div>
          <h2>Our primary goal</h2>
          <p>
            is to provide animals with the most necessary things - food, medicine, and urgent needs for the livelihood
            of shelters. We believe in our power and the power of conscious citizens who care about the environment and
            their health, who understand the importance of helping each other, especially our little friends. Growth
            begins with your care for your loved ones. Animals are one of the closest creatures to humans who remain
            with us throughout our lives. We all know the healing power of warmth, grace, and big loving eyes.
          </p>
        </div>
        <blockquote className="border-l-4 border-pink-300 p-[3vw] ml-[4vw] text-[2.8vw] italic">
          &quot;Animals need to have friends. Just like humans.&quot;
          <br />- James Herriot, All Creatures Great and Small
        </blockquote>
        <p>
          Who else if not we should support our younger brothers, especially in difficult times? Let&apos;s be friends!
        </p>
        <div id="yt" className="border w-full aspect-[16/9]">
          <video width="100%" height="100%" controls preload="none">
            <source src="https://www.youtube.com/watch?v=5Wk1rp99B7o&feature=youtu.be" type="video/mp4" />
            <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
