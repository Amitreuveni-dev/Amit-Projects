import styles from "./Header.module.scss";

interface HeaderProps {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ showForm, setShowForm }: HeaderProps) {
  const appTitle = "Today I Learned";

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Today I Learned Logo" />
        <h1 className={styles.title}>{appTitle}</h1>
      </div>

      <button
        className={styles.btn}
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
}

export default Header;