import { useRouter } from "next/router";
import Section from "../../ui/commons/section";
import Menu from "../../ui/commons/menu";
import PageDetailRoot from "../../ui/bets/detail";

// detail page for the bet recived by id
export default function DetailBet() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Section>
      <Menu />
      <PageDetailRoot contractAddress={id} />
    </Section>
  );
}
