import Section from "../ui/commons/section";
import Menu from "../ui/commons/menu";
import PageBetsHomeRoot from "../ui/bets/home";

// root page for the bets
export default function Bets() {
  return (
    <Section>
      <Menu />
      <PageBetsHomeRoot />
    </Section>
  );
}
