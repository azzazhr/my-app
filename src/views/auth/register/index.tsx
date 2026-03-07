import Link from "next/link";
import styles from "./register.module.css";

const TampilanRegister = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.title}>Halaman Register</h1>

      <input
        type="text"
        placeholder="Username"
        className={styles.input}
      />

      <input
        type="email"
        placeholder="Email"
        className={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        className={styles.input}
      />

      <button className={styles.button}>Register</button>

      <Link href="/auth/login" className={styles.link}>
        Ke Halaman Login 
      </Link>
    </div>
  );
};

export default TampilanRegister;