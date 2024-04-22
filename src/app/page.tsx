import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      Hello
      <div>
        <Image alt="hero" src="/hero-desktop.png" width={640} height={370} />
      </div>
    </div>
  );
}
