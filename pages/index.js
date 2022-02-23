import { useState } from "react";
import withAuth from "../component/HOC/withAuth";
import Layout from "../component/Layout";
import styles from "../styles/Home.module.css";

Home.title = "Homepage";
function Home(props) {
  const [value, setValue] = useState(50);
  const [color, setColour] = useState(Math.floor(value * 2.55));
  console.log(props.accessToken);

  const handleChange = (e) => {
    setValue(e.target.value);
    //console.log(Math.floor(e.target.value) * 2.55);
    setColour(Math.floor(e.target.value * 2.55));
  };

  return (
    <>
      <div className={styles.container}>
        <h1 style={{ color: "#6E6E6E" }}>Home Page</h1>
        <p>Check current Home Page </p>
      </div>

      <div style={{ backgroundColor: `rgb(${color},${color}, ${color})` }}>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          className="slider1"
          id="myRange"
          onChange={(e) => handleChange(e)}
        />
      </div>
      {/* <p> value of chnage the slider {value}</p> */}
    </>
  );
}

export default withAuth(Home);
