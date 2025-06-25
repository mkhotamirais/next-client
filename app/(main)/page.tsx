import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="container">
        <h1 className="h1">Home</h1>
        <Link href="/template-web">
          <Button>Template Web</Button>
        </Link>
      </div>
    </section>
  );
}
