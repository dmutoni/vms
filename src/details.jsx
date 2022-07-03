import React from "react";
import { useParams } from "react-router-dom";
import Header from "./components/header";

export default function Details({ candidate }) {
  let { id } = useParams();
  return (
    <div className="container-fluid col-12">
      <Header />
      <div className="d-flex flex-row col-10 mx-auto mt-5 gap-3 ">
        <img className="col-4 my-auto" src={"../assets/images/barack.png"} />
        <div className="col-5 ">
          <div className="d-flex flex-row ">
            <p className="fw-bold fs-2 ">Names: </p>
            <p className="fw-bold fs-2">Barack Obama</p>
          </div>
          <div className="d-flex flex-row ">
            <p className="">Gender: </p>
            <p className="">Male</p>
          </div>
          <div className="d-flex flex-row ">
            <p className="">Gender: </p>
            <p className="">Male</p>
          </div>
          <div className="d-flex flex-row ">
            <p className="">Location: </p>
            <p className="">New york</p>
          </div>
          <div className="d-flex flex-column ">
            <p className="fw-bold">I agree to: </p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              saepe, inventore adipisci dolorum facere quidem aspernatur
              quibusdam optio placeat exercitationem dolores hic quasi, sit
              magnam eum nihil illum laborum labore.
            </p>
          </div>
          <button className="btn col-12 bg-app-primary bg-text-color me-2">
            {" "}
            Vote{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
