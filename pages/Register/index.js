import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styles from "../login/login.module.css";
import Link from "next/link";
import Layout from "../../component/Layout";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});
  const router = useRouter();
  const password = useRef();
  password.current = watch("password");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const [passwordShow, setPasswordShow] = useState(false);

  const uploadFile = ({ target: { files } }) => {
    let data = new FormData();
    data.append("file", files[0]);
  };
  const RegisterData = (data) => {
    console.log(data);
    router.push("/Register/OTPBox");
  };

  return (
    <>
      <div className="container mt-3">
        <form onSubmit={handleSubmit(RegisterData)}>
          <div className="form-group mb-3">
            <label for="firstname" className="form-label">
              FirstName
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              name="firstname"
              placeholder="fisrtName"
              {...register("firstname", { required: true })}
            />
            {errors.firstname && (
              <span className={styles.error}>firstName required</span>
            )}
          </div>

          <div className="form-group mb-3">
            <label for="lastname" className="form-label">
              LastName
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              name="lastname"
              {...register("lastname", { required: true })}
              placeholder="lastname"
            />
            {errors.lastname && (
              <span className={styles.error}>lastname required</span>
            )}
          </div>
          <div className="form-group mb-3">
            <label for="phonenumber" className="form-label">
              Phone Number
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              name="number"
              type="number"
              placeholder="enter number"
              {...register("number", { required: true })}
            />
            {errors.number && errors.number.type === "required" && (
              <span className={styles.error}>number is required</span>
            )}
          </div>
          <div className="mb-3">
            <label for="InputEmail" className="form-label">
              Email address
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
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
          <div className=" mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              name="password"
              type={passwordShow ? "text" : "password"}
              placeholder="password"
              {...register("password", { required: true, minLength: 6 })}
            />
            <span
              className={styles.icon}
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? (
                <i className="fas fa-eye" />
              ) : (
                <i className="fas fa-eye-slash" />
              )}
            </span>

            {errors.password && errors.password.type === "required" && (
              <span className={styles.error}> password is required</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className={styles.error}>
                Password must have at least 6 characters
              </span>
            )}
          </div>

          <div className=" mb-3">
            <label for="confirmpassword" className="form-label">
              confirm password
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
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
          <div className=" mb-3">
            <label for="image" className="form-label">
              Choose the image
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              type="file"
              {...register("file", {
                required: true,
              })}
              onChange={uploadFile}
            />
            {/* {uploadPercentage > 0 && (  // update on on the server side upload 
                <div className="row mt-3">
                  <div className="col pt-1">
                    <ProgressBar
                      now={uploadPercentage}
                      striped={true}
                      label={`${uploadPercentage}%`}
                    />
                  </div>
                  <div className="col-auto">
                    <span
                      className="text-primary cursor-pointer"
                      onClick={() => cancelUpload()}
                    >
                      Cancel
                    </span>
                  </div>
                </div>
              )} */}
          </div>
          <button
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
            type="submit"
          >
            Submit
          </button>
          <button
            type="button"
            style={{ marginTop: "10px", marginLeft: "5px" }}
            className="btn btn-secondary"
            onClick={() => {
              router.push("/login");
            }}
          >
            {" "}
            cancel
          </button>
        </form>
        <div className="container mt-3">
          <span>
            Already Account?
            <Link className="navlink" href="/login">
              <a> Sign in</a>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
