import React from "react";

export default function Candidate() {
  return (
    <div className="border border-2 candidate mx-auto py-2 ">
      <img src={"../assets/images/barack.png"} alt="president" />
      <p className="m-2">Barack Obama</p>
      <div className="row mx-1">
        <button className="btn col bg-app-primary bg-text-color me-2">
          {" "}
          VOTE{" "}
        </button>
        <button className="btn col btn-outline-success"> VOTE </button>
      </div>
    </div>
  );
}
