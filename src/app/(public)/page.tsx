import Image from "next/image";
import { headers } from "next/headers";

type Props = {
  searchParams: {
    device: string;
  };
};

export default function HomePage({ searchParams }: Props) {
  const headersList = headers();
  const deviceHeader = headersList.get("x-device");
  return (
    <div>
      Hello, device: {searchParams.device}
      <div>
        <Image alt="hero" src="/hero-desktop.png" width={640} height={370} />
      </div>
    </div>
  );
}
