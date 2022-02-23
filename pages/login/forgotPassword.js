import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styles from "./login.module.css";
import Layout from "../../component/Layout";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});

  const router = useRouter();
  const password = useRef();
  password.current = watch("password");

  const onData = (data) => {
    console.log(data);

    router.replace("/login");
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit(onData)}>
        <div class="form-group">
          <label className={styles.label}>Email Id</label>
          <input
            className="form-control"
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
          <label className={styles.label}>New Password</label>
          <input
            className="form-control"
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
        <div className="form-group">
          <label className={styles.label}>confirm password</label>
          <input
            className="form-control"
            name="password_confirm"
            type="password"
            placeholder="confirm_password"
            {...register("password_confirm", {
              required: true,
              validate: (value) => value === password.current,
            })}
          />
          {errors.password_confirm &&
            errors.password_confirm.type === "required" && (
              <span className={styles.error}>
                password confirm field is required
              </span>
            )}
          {errors.password_confirm &&
            errors.password_confirm.type === "validate" && (
              <span className={styles.error}>passwords do not match</span>
            )}
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
            router.push("/login");
          }}
        >
          {" "}
          cancel
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
