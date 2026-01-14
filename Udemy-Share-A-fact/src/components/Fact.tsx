import { useState } from "react";
import supabase from "../services/supabase";
import { CATEGORIES } from "../constants/categories";
import { Fact as FactType } from "../types";

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
    <li className="fact">
      <p>
        {isDisputed ? <span className="disputed">[⛔DISPUTED]</span> : null}
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            ?.color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
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
