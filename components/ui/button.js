import Link from "next/link";
import styles from "./button.module.css";

const Button = (props) => {
  if (props.Link) {
    return (
      <Link href={props.Link} className={styles.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} className={styles.btn}>
      {props.children}
    </button>
  );
};

export default Button;
