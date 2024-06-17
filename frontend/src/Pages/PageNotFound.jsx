import React from "react";

import notfound from "../assets/notfound.png";
import { Link } from "react-router-dom";

function PageNotFound() {
   return (
      <section id="notFoundSection">
         <div className="container text-center my-5">
            <img src={notfound} alt="Not Found" />
            <h1
               style={{
                  color: "#39C6B5",
                  fontFamily: "Lilita One, sans-serif",
                  fontSize: "90px",
               }}
            >
               404
            </h1>
            <p>Page Not Found</p>
            <Link to="/" className="btn btn-outline-info rounded-pill">
               Go Back Home
            </Link>
         </div>
      </section>
   );
}

export default PageNotFound;
