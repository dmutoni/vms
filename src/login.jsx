import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/header";

export default function Login() {
  return (
    <div>
      <Header />
      <div className="col-4 mx-auto border  p-5 mt-5">
        <p className="font-bold fs-1">Sign up</p>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn bg-app-primary bg-text-color col-12">
            Submit
          </button>
          <div className="d-flex flex-row justify-content-center gap-2 mt-2 ">
            <p>Don't have an account ? </p>
            <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
