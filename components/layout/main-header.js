import Link from "next/link";
import styles from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Next Event</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/events">All events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
