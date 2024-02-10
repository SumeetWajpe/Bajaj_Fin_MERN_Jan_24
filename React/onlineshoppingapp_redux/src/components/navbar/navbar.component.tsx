import React from "react";
import { Link } from "react-router-dom";
import CurrentCartCount from "../currentCartCount/currentCartCount.component";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark mb-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Online Shopping
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newproduct">
                  Add New Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts">
                  Posts
                </Link>
              </li>
            </ul>
          </div>
          <CurrentCartCount />
        </div>
      </nav>
    </div>
  );
}
