import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <main>
      <Head>
        <title>layout page demo</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="This is the Bits demo project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="container-fluid">{props.children}</div>
    </main>
  );
};

export default Layout;
