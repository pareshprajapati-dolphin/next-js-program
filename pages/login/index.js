import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import styles from "./login.module.css";
import Layout from "../../component/Layout";

const Auth = (props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const LoginData = (data) => {
    console.log(data);
    if (data.email === "abc@test.com" && data.password === "password") {
      localStorage.setItem("accessToken", "12345676");
      router.push("/");
    } else {
      router.push("/login");
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <form onSubmit={handleSubmit(LoginData)}>
          <div class="form-group">
            <label className={styles.label}>Email Id</label>
            <input
              className={styles.input}
              style={{ margin: "5px" }}
              {...register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              placeholder="email Id"
            />

            {errors.email && errors.email.type === "required" && (
              <span className={styles.error}>email is required</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className={styles.error}>Invalid Email</span>
            )}
          </div>
          <div class="form-group">
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              style={{ margin: "5px" }}
              type="password"
              {...register("password", {
                required: true,
              })}
              placeholder="password"
            />

            {errors.password && (
              <span className={styles.error}>password is required</span>
            )}
          </div>
          <div className="mt-1">
            <Link href="/login/forgotPassword">
              <a className="nav-item">Forgot Password</a>
            </Link>
          </div>
          <button
            className="btn btn-primary"
            style={{ margin: "5px" }}
            type="submit"
          >
            Submit
          </button>
          <button
            type="button"
            style={{ margin: "5px" }}
            className="btn btn-secondary"
            onClick={() => {
              router.push("/");
            }}
          >
            {" "}
            cancel
          </button>
        </form>
        <div className="container mt-3">
          <span>
            create New Account ?
            <Link className="navlink" href="/Register">
              <a> Sign Up</a>
            </Link>
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
