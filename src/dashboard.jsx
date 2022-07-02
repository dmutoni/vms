import React from "react";
import Candidate from "./components/candidate";
import Header from "./components/header";

export default function Dashboard() {
  return (
    <div className="">
      <Header />
      <div className="row m-lg-4 ">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <p class="fw-bold fs-1">Fast and secure Presidential Elections </p>
          <p class="fw-normal fs-6">For sure you have made a right choice</p>
          <button className="btn w-50 bg-text-color h-25  bg-app-primary">
            JOIN NOW
          </button>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img
            className="w-50 d-block mx-auto"
            src={"../assets/images/phone.png"}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center align-content-center ">
        <p className="d-block mx-auto font-bold fs-4">All candidates</p>
      </div>
      <div className="row col-8 mx-auto ">
        <Candidate />
        <Candidate />
        <Candidate />
        <Candidate />
        <Candidate />
        <Candidate />
        <Candidate />
        <Candidate />
        <Candidate />
      </div>
    </div>
  );
}
