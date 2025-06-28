import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="container space-y-3 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="h1 mb-2">Hi, I’m Khotami, a Frontend Developer</h1>
        <p>Below are some of the front-end websites and interfaces I’ve built.</p>

        <nav className="flex items-center gap-1">
          <Link href="/dummyjson" className="hover:underline py-2 px-3 border rounded leading-none">
            Dummyjson
          </Link>
          <Link href="/scrollmagic" className="hover:underline py-2 px-3 border rounded leading-none">
            Scrollmagic
          </Link>
        </nav>

        <p>I’m always learning and experimenting with new technologies.</p>
        <p>Feel free to explore more below.</p>
      </div>
    </main>
  );
}
