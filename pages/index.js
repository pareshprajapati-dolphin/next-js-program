import withAuth from "../component/HOC/withAuth";
import Layout from "../component/Layout";
import styles from "../styles/Home.module.css";

function Home(props) {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 style={{ color: "#6E6E6E" }}>Home Page</h1>
        <p>Check current Home Page </p>
      </div>
    </Layout>
  );
}

export default withAuth(Home);
