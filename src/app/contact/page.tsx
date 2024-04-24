import { AuthInfo } from "@/components/Auth/AuthInfo";
import { Header } from "@/ui";

type Props = {
  searchParams: {
    device: string;
  };
};

export default function ContactPage({ searchParams }: Props) {
  return (
    <div>
      <Header>Contact</Header>
      <div>Device: {searchParams.device}</div>
      <AuthInfo />
    </div>
  );
}
