"use client";

import React from "react";
import ProgressBar from "./ProgressBar";
import Parallax from "./Parallax";
import Bulb1 from "./Bulb1";
import Bulb2 from "./Bulb2";

export default function Scroll() {
  return (
    <div className="min-h-[200vh]">
      <h2 className="h2">Scroll</h2>
      <div>
        <ProgressBar />
        <Parallax />
        <Bulb1 />
        <Bulb2 />
      </div>
    </div>
  );
}
