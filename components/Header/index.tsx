import NextLink from "next/link";
import styles from "./Header.module.css";

export default function Header(_props) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logo} src="/shirotora.png" />
        <span />
        <h1>Shirotora</h1>
      </div>
      <div className={styles.menu}>
        <NextLink href="/" legacyBehavior>
          <a>Home</a>
        </NextLink>
        <NextLink href="/about" legacyBehavior>
          <a>About</a>
        </NextLink>
      </div>
    </div>
  );
}
