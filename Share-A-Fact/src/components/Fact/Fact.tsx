import { useState } from "react";
import supabase from "../../services/supabase";
import { CATEGORIES } from "../../constants/categories";
import type { Fact as FactType } from "../../types";
import styles from "./Fact.module.scss";

interface FactProps {
  fact: FactType;
  setFacts: React.Dispatch<React.SetStateAction<FactType[]>>;
}

function Fact({ fact, setFacts }: FactProps) {
  const [isUpdating, setIsUpdating] = useState(false);

  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;

  async function handleVote(columnName: string) {
    setIsUpdating(true);

    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({
        [columnName]: (fact[columnName as keyof FactType] as number) + 1,
      })
      .eq("id", fact.id)
      .select("*")
      .single();

    setIsUpdating(false);

    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? (updatedFact as FactType) : f))
      );
  }

  return (
    <li className={styles.fact}>
      <p>
        {isDisputed ? <span className={styles.disputed}>[⛔DISPUTED]</span> : null}
        {fact.text}
        <a
          className={styles.source}
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (source)
        </a>
      </p>
      <span
        className={styles.tag}
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            ?.color,
        }}
      >
        {fact.category}
      </span>
      <div className={styles.voteButtons}>
        <button
          onClick={() => handleVote("votesInteresting")}
          disabled={isUpdating}
        >
          👍 {fact.votesInteresting}
        </button>
        <button
          onClick={() => handleVote("votesMindblowing")}
          disabled={isUpdating}
        >
          🤯 {fact.votesMindblowing}
        </button>
        <button onClick={() => handleVote("votesFalse")} disabled={isUpdating}>
          ⛔️ {fact.votesFalse}
        </button>
      </div>
    </li>
  );
}

export default Fact;
