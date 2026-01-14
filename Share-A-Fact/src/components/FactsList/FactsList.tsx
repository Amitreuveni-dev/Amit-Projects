import Fact from "../Fact";
import type { Fact as FactType } from "../../types";
import styles from "./FactsList.module.scss";

interface FactsListProps {
  facts: FactType[];
  setFacts: React.Dispatch<React.SetStateAction<FactType[]>>;
}

function FactsList({ facts, setFacts }: FactsListProps) {
  if (facts.length === 0)
    return (
      <p className={styles.message}>
        No facts for this category yet! Create the first one ✌️
      </p>
    );

  return (
    <section>
      <ul>
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} setFacts={setFacts} />
        ))}
      </ul>
      <p>There are {facts.length} facts, Make your own</p>
    </section>
  );
}

export default FactsList;
