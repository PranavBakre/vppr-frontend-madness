import * as styles from "./login.module.css";

function Login() {
  return (
    <div className={styles.loginForm}>
      <div className={styles.formRow}>
        <input type="text" name="username" className={styles.input} />
      </div>
      <div className={styles.formRow}>
        <input type="password" name="password" className={styles.input} />
      </div>
      <div className={styles.formRow}>
        <button className={styles.submit}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
