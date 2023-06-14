import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const { logIn, googleLogin, loading } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState(true);

  const handleLogin = (data) => {
    logIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        navigate(from, { replace: true });
        toast("Logged in successfully");
        loading(true);
        console.log(user);
      })
      .catch((err) => console.error(err));
    console.log(data);
    alert("logged in");
  };

  const handleGoogle = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="shadow-xl py-3 rounded-md">
        <h2 className="text-3xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="card-body w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-accent">Login</button>
            </div>
            <p>
              New to Doctors Portal?{" "}
              <Link className="text-secondary" to={"/signup"}>
                Create new account.
              </Link>
            </p>
            <div className="divider">OR</div>
          </div>
        </form>
        <button onClick={handleGoogle} className="btn btn-outline w-full">
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Login;
