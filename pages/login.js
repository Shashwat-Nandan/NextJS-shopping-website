import styles from "../styles/Login.module.css";
import Layout from "../components/Layout";

function Login() {
  return (
    <Layout>
      <div className={styles.container}>
        <form className={styles.card}>
          <h2>SIGN UP</h2>
          <label htmlFor="first">First Name</label>
          <input id="first" placeholder="First Name" />

          <label htmlFor="last">Last Name</label>
          <input id="last" placeholder="Last Name" />

          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Email" type="email" />

          <label htmlFor="password">Password</label>
          <input id="password" placeholder="password" type="password" />

          <button className={styles.button}>SIGN UP</button>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
