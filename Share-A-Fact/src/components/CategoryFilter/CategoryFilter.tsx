import { CATEGORIES } from "../../constants/categories";
import styles from "./CategoryFilter.module.scss";

interface CategoryFilterProps {
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
}

function CategoryFilter({ setCurrentCategory }: CategoryFilterProps) {
  return (
    <aside>
      <ul>
        <li className={styles.category}>
          <button
            className={`${styles.btn} ${styles.btnAll}`}
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>
        </li>

        {CATEGORIES.map((cat) => (
          <li key={cat.name} className={styles.category}>
            <button
              className={`${styles.btn} ${styles.btnCategory}`}
              style={{ backgroundColor: cat.color }}
              onClick={() => setCurrentCategory(cat.name)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
