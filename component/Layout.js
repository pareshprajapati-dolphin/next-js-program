import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import "../styles/globals.css";

const Layout = (props) => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [show, setShow] = useState(false);
  const showHeader = router.pathname === "/login" ? false : true;

  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="This is the Bits demo project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {showHeader ? (
        <Navbar
          isOn={isChecked}
          handleToggle={() => setIsChecked(!isChecked)}
        />
      ) : null}
      <div
        className={isChecked ? "container-fluid bg-primary" : "container-fluid"}
      >
        {props.children}
      </div>
    </main>
  );
};

export default Layout;
