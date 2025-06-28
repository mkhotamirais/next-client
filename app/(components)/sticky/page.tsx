import React from "react";

export default function Sticky() {
  return (
    <div>
      <h2 className="h2">Sticky</h2>
      <div className="mb-4 max-w-sm">
        <h3 className="h3">Sticky Model 1</h3>
        <div className="relative h-64 w-full border overflow-y-scroll">
          <div className="h-10">above header</div>
          <div className="h-10 sticky top-0 bg-blue-500">Header</div>
          <div className="h-100 border">content</div>
        </div>
      </div>
      <div className="mb-4 max-w-sm">
        <h3 className="h3">Sticky Model 2</h3>
        <div className="relative h-64 w-full border overflow-y-scroll">
          <div>
            <div className="h-10">above header</div>
            <div className="h-10 sticky top-0 bg-blue-500">A</div>
            <div className="h-100 border">content</div>
          </div>
          <div>
            <div className="h-10 sticky top-0 bg-blue-500">B</div>
            <div className="h-100 border">content</div>
          </div>
          <div>
            <div className="h-10 sticky bg-blue-500">C</div>
            <div className="h-100 border">content</div>
          </div>
        </div>
      </div>
      <div className="mb-3 max-w-sm">
        <h3 className="h3">Sticky Model 3</h3>
        <div className="relative h-64 w-full border overflow-y-scroll">
          <div className="h-10">above header</div>
          <div className="h-10 sticky top-0 bg-blue-500">header</div>
          <div className="h-100 border flex">
            <div className="w-1/2 border sticky top-10 h-16">left</div>
            <div className="w-1/2 border h-72">right</div>
          </div>
        </div>
      </div>
      <div className="mb-3 max-w-sm">
        <h3 className="h3">Sticky Model 4</h3>
        <div className="relative h-64 w-full border overflow-y-scroll">
          <div className="h-10">above header</div>
          <div className="h-10 sticky top-0 bg-blue-500">header</div>
          <div className="h-100 border grid grid-cols-2">
            <div className="border sticky top-10 h-16">left</div>
            <div className="border h-72">right</div>
          </div>
        </div>
      </div>
    </div>
  );
}
