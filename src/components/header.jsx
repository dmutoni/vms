import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="col-12 py-3 bg-app-primary">
      <nav className="navbar  navbar-expand-lg navbar-light">
        <Link
          to="/"
          className="ms-lg-5 my-auto bg-text-color text-decoration-none fs-3 "
        >
          Vote pro
        </Link>
      </nav>
    </div>
  );
}
