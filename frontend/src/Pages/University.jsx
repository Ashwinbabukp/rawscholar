import React from "react";

import university1 from "../assets/universities/university1.svg";

function University({show}) {
   show(true)
   return (
      <section id="universitySection" className="container">
         <div className="universityContainer my-5">
            <div className="d-lg-flex justify-content-between align-items-center rounded shadow p-5 my-5">
               <div className="universityContent">
                  <h4 style={{ color: "#067BC2" }}>In Canada</h4>
                  <h3>Massachusetts Institute of Technology (MIT)</h3>
                  <p style={{ color: "gray" }}>
                     Cambridge, Massachusetts, USA | Public University |
                     Established 1908
                  </p>
               </div>
               <img src={university1} alt="university" height={100} />
            </div>
            <div className="courseTags d-flex flex-wrap gap-3">
               <div className="tags rounded-pill shadow-sm px-3 pt-3">
                  <p>All Courses</p>
               </div>
               <div className="tags rounded-pill shadow-sm px-3 pt-3">
                  <p>Masters Courses</p>
               </div>
               <div className="tags rounded-pill shadow-sm px-3 pt-3">
                  <p>Bachelors Courses</p>
               </div>
               <div className="tags rounded-pill shadow-sm px-3 pt-3">
                  <p>PhD Courses</p>
               </div>
               <div className="tags rounded-pill shadow-sm px-3 pt-3">
                  <p>Engineering Courses</p>
               </div>
               <div className="tags rounded-pill shadow-sm px-3 pt-3">
                  <p>Business Courses</p>
               </div>
               <div className="tags rounded-pill shadow-sm px-3 pt-3">
                  <p>Science Courses</p>
               </div>
               <div className="tags rounded-pill shadow-sm px-3 pt-3">
                  <p>Humanities Courses</p>
               </div>
               <div className="tags rounded-pill shadow-sm px-3 pt-3">
                  <p>Btech</p>
               </div>
            </div>
            <div className="courseContainer d-flex justify-content-between gap-5 flex-wrap py-5 px-2">
               <div className="courseCard rounded shadow p-5 col-lg-5">
                  <div className="courseTitle mb-4 fw-bold">
                     <h5 className="fw-bold">Bachelor of Science in Physics</h5>
                  </div>
                  <div className="courseContent row">
                     <div className="col-3">
                        <span style={{ color: "#067BC2" }}>Duration</span>
                        <p style={{ color: "gray" }}>1 Year</p>
                     </div>
                     <div className="col-6">
                        <span style={{ color: "#067BC2" }}>
                           1st Year Tuition Fees
                        </span>
                        <p style={{ color: "gray" }}>$64.3</p>
                     </div>
                     <div className="col-3">
                        <span style={{ color: "#067BC2" }}>Level</span>
                        <p style={{ color: "gray" }}>Bachelor</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default University;
