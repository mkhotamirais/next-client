import React from "react";
import Header from "./(components)/Header";

export default function DummyjsonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
