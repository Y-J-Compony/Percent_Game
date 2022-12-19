import { SectionsContainer, Section } from "react-fullpage";
import Labor from "./Labor";
import Reversal_Life from "./Reversal _Life";

export default function Main() {
  let options = {
    anchors: ["sectionOne", "sectionTwo"],
    scrollBar: false,
    navigation: false,
  };
  return (
    <div>
      <SectionsContainer {...options}>
        <Section>
          <Labor />
        </Section>
        <Section>
          <Reversal_Life />
        </Section>
      </SectionsContainer>
    </div>
  );
}
