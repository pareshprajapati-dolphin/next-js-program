import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import styles from "./login.module.css";

const Auth = (props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const [passwordShow, setPasswordShow] = useState(false);

  const ShowPassword = () => {
    setPasswordShow(!passwordShow);
  };

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
    <div className="container mt-3">
      <form onSubmit={handleSubmit(LoginData)}>
        <div class="form-group mb-3">
          <label for="InputEmail" className="form-label">
            Email or Phone
          </label>
          <input
            className="form-control"
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            placeholder="email or phone"
          />

          {errors.email && errors.email.type === "required" && (
            <span className={styles.error}>email is required</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className={styles.error}>Invalid Email</span>
          )}
        </div>
        <div className="form-group mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            type={passwordShow ? "text" : "password"}
            {...register("password", {
              required: true,
            })}
            placeholder="password"
          />
          <span className={styles.icon} onClick={ShowPassword}>
            {passwordShow ? (
              <i class="fas fa-eye" />
            ) : (
              <i class="fas fa-eye-slash" />
            )}
          </span>
        </div>
        {errors.password && (
          <span className={styles.error}>password is required</span>
        )}
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
  );
};

export default Auth;
