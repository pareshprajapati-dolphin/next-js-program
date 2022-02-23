import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../component/Layout";
import withAuth from "../component/HOC/withAuth";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Component.title}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
