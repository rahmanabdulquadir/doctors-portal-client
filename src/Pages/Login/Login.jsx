import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="shadow-xl py-3 rounded-md">
        <h2 className="text-3xl text-center">Login</h2>
        <form>
          <div className="card-body w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-accent">Login</button>
            </div>
            <p>New to Doctors Portal? <Link className="text-secondary" to={'/signup'}>Create new account.</Link></p>
            <div className="divider">OR</div>
            <button className="btn btn-outline">Continue with google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
