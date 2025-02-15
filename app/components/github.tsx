import { Slide } from "./animations/Slide";
import ContributionGraph from "./graph";

export default function GithubCalendarComponent() {
  return (
    <Slide delay={0.18}>
      <ContributionGraph />
    </Slide>
  );
}
