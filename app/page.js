import Display from "@/components/Display";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Display styles={styles} />
    </div>
  );
}