import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../component/Layout";
import styles from "../login/login.module.css";

const OTPBox = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (e, i) => {
    if (isNaN(e.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === i ? e.value : d))]);

    //Focus next input
    if (e.nextSibling) {
      e.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    let otpData = otp.toString().split(",").join("");
    console.log(otpData);
    alert(otpData);
  };

  return (
    <div className="container ">
      <div className="col text-center">
        <p>Enter the OTP sent to you to verify your identity</p>

        {otp.map((data, index) => {
          return (
            <input
              className={styles.otpfield}
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
      <div className="text-center mt-2">
        <button
          className="btn btn-primary"
          style={{ margin: "5px", width: "10%" }}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
        <button
          type="button"
          style={{ width: "10%", margin: "5px" }}
          className="btn btn-secondary"
          onClick={() => {
            router.push("/");
          }}
        >
          {" "}
          cancel
        </button>
      </div>
    </div>
  );
};

export default OTPBox;
