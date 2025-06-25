import React from "react";

export default function SectionFooter() {
  return (
    <footer>
      <div className="container">
        <div className="grid grid-cols-3">
          <div>1</div>
          <div className="grid grid-cols-2">
            <div>2</div>
            <div>3</div>
          </div>
          <div>4</div>
        </div>
        <div className="flex justify-between py-4">
          <div>left</div>
          <div>right</div>
        </div>
      </div>
    </footer>
  );
}
