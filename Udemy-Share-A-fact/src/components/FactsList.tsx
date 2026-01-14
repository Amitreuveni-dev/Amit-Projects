import Fact from "./Fact";
import { Fact as FactType } from "../types";

interface FactsListProps {
  facts: FactType[];
  setFacts: React.Dispatch<React.SetStateAction<FactType[]>>;
}

function FactsList({ facts, setFacts }: FactsListProps) {
  if (facts.length === 0)
    return (
      <p className="message">
        No facts for this category yet! Create the first one ✌️
      </p>
    );

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} setFacts={setFacts} />
        ))}
      </ul>
      <p>There are {facts.length} facts, Make your own</p>
    </section>
  );
}

export default FactsList;
