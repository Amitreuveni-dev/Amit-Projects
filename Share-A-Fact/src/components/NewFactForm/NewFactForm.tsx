import { useState } from "react";
import supabase from "../../services/supabase";
import { CATEGORIES } from "../../constants/categories";
import { isValidHttpUrl } from "../../utils/validation";
import type { Fact } from "../../types";
import styles from "./NewFactForm.module.scss";

interface NewFactFormProps {
  setFacts: React.Dispatch<React.SetStateAction<Fact[]>>;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function NewFactForm({ setFacts, setShowForm }: NewFactFormProps) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(text, source, category);

    if (text && isValidHttpUrl(source) && category && text.length <= 200) {
      setIsUploading(true);

      const { data, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select()
        .single();

      setIsUploading(false);

      if (!error) setFacts((facts) => [data as Fact, ...facts]);

      setText("");
      setSource("");
      setCategory("");
      setShowForm(false);
    }
  }

  return (
    <form
      className={styles.factForm}
      name="fact-form"
      id="fact-form"
      onSubmit={handleSubmit}
    >
      <input
        className={`${styles.input} ${styles.inputText}`}
        type="text"
        placeholder="Share a fact with the world... "
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span className={styles.charCount}>
        {200 - textLength}
        {textLength === 200 && " — You have reached the maximum length"}
      </span>
      <input
        className={styles.input}
        type="text"
        placeholder="http://example.com"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />
      <select
        className={styles.select}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className={styles.btn} disabled={isUploading}>
        post
      </button>
    </form>
  );
}

export default NewFactForm;
