import { Link } from "react-router-dom";

import heroImage from "../../assets/heroimg3.jpg";
import find2 from "../../assets/find2.png";
import passport2 from "../../assets/passport2.png";
import diploma2 from "../../assets/diploma2.png";
import germany from "../../assets/flags/germany.png";
import france from "../../assets/flags/france.png";
import uk from "../../assets/flags/uk.png";
import hungary from "../../assets/flags/hungary.png";
import university1 from "../../assets/universities/university1.svg";
import university2 from "../../assets/universities/university2.svg";
import university3 from "../../assets/universities/university3.svg";
import university4 from "../../assets/universities/university4.svg";

import styles from "./Home.module.css";

function Home({ show }) {
   show(true);
   return (
      <>
         <section id="heroContainer">
            <div className={styles.hero}>
               <div className={styles.heroContent}>
                  <div className={styles.heroText} style={{fontSize:"70px"}}>ignite</div>
                  <div className={styles.heroText}>
                     <span>your academic journey</span>
                  </div>
               </div>
               <div className={styles.heroImageDiv}>
                  <img src={heroImage} alt="Hero" />
               </div>
            </div>
         </section>
         <section className="working container">
            <div className="cardContainer my-5 py-5 gap-5 d-lg-flex row-gap-3">
               <div className="d-flex align-items-center gap-4 p-3 shadow rounded mb-4">
                  <img src={find2} height="60" alt="card 1" />
                  <div>
                     <h5 className={styles.cardHeading}>Courses for you</h5>
                     <p className={styles.cardText}>
                        We will take you to the courses that are perfect for
                        you. All you have to do is send your applications and
                        look up to your dream course.
                     </p>
                  </div>
               </div>
               <div className="d-flex align-items-center gap-4 p-3 shadow rounded mb-4">
                  <img src={passport2} height="60" alt="card 2" />
                  <div>
                     <h5 className={styles.cardHeading}>Get your visa</h5>
                     <p className={styles.cardText}>
                        The procedures of visas might be tiring. We will be
                        there to assist you from arranging a mockup interview to
                        getting an actual one and more.
                     </p>
                  </div>
               </div>
               <div className="d-flex align-items-center gap-4 p-3 shadow rounded mb-4">
                  <img src={diploma2} height="60" alt="card 3" />
                  <div>
                     <h5 className={styles.cardHeading}>Scholarships</h5>
                     <p className={styles.cardText} x>
                        Get the right scholarship you deserve. We will take you
                        to the immense opportunities of scholarship for a
                        brighter future.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row mb-5">
               <div className="col-lg-6">
                  <iframe
                     width="100%"
                     height="315"
                     className="rounded"
                     src="https://www.youtube.com/embed/QfBasFOvhyI?si=VPPZBM6Pph3J-WQ6"
                     title="YouTube video player"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowfullscreen
                  ></iframe>
               </div>
               <div
                  className="col-lg-6 py-4 px-5 shadow rounded shapeParent"
                  style={{ height: "315px" }}
               >
                  <div className="d-flex">
                     <div className="shape"></div>
                     <h5 className="fs-4">How it works</h5>
                  </div>
                  <p>
                     Raw Scholar is available to all students who wish to study
                     abroad. Raw scholar is India’s 1st all inclusive platform
                     in India designed to guide students in their college
                     application process to universities and colleges abroad.
                     Raw scholar is not our name. Its the name given to all the
                     students is alumni of Raw scholar. You became a Raw scholar
                     from the moment you entered this platform
                  </p>
                  <a
                     href="/"
                     style={{ color: "#067bc2", textDecoration: "none" }}
                  >
                     Know more →
                  </a>
               </div>
            </div>
         </section>
         <section className="services container">
            <div className="countriesContainer ">
               <div className={`${styles.titleBar} d-flex shapeParent`}>
                  <div className="shape"></div>
                  <h2 className="fs-4 ms-4">Major Countries</h2>
                  <Link
                     to="/countries"
                     className={`${styles.titleTag} ms-auto py-2 px-3 shadow`}
                  >
                     View all countries →
                  </Link>
               </div>
               <div className="countriesList d-lg-flex flex-wrap text-center justify-content-between">
                  <div>
                     <img
                        src={germany}
                        alt="germany"
                        width="250"
                        className="rounded"
                     />
                     <p>Germany</p>
                  </div>
                  <div>
                     <img
                        src={hungary}
                        alt="hungary"
                        width="250"
                        className="rounded"
                     />
                     <p>Hungary</p>
                  </div>
                  <div>
                     <img
                        src={france}
                        alt="france"
                        width="250"
                        className="rounded"
                     />
                     <p>France</p>
                  </div>
                  <div>
                     <img src={uk} alt="uk" width="250" className="rounded" />
                     <p>UK</p>
                  </div>
               </div>
            </div>

            {/* Major University */}

            <div className="universityContainer my-5">
               <div className={`${styles.titleBar} d-flex shapeParent`}>
                  <div className="shape"></div>
                  <h2 className="fs-4 ms-4">Major University</h2>
                  <Link
                     to="/universities"
                     className={`${styles.titleTag} ms-auto py-2 px-3 shadow`}
                  >
                     View all 1900+ University
                  </Link>
               </div>
               <div className="universityList d-lg-flex flex-wrap gap-5">
                  <div
                     className="universityCard shadow p-3 rounded m-auto mb-3"
                     style={{ width: "18rem" }}
                  >
                     <img
                        src={university1}
                        alt="university1"
                        style={{ width: "100%" }}
                        className="rounded mb-3"
                     />
                     <p className={styles.universityTitle}>In USA</p>
                     <p className={styles.universityFname}>
                        Massachusetts Institute of Technology (MIT)
                     </p>
                  </div>
                  <div
                     className=" universityCard shadow p-3 rounded m-auto mb-3"
                     style={{ width: "18rem" }}
                  >
                     <img
                        src={university2}
                        alt="university1"
                        style={{ width: "100%" }}
                        className="rounded mb-3"
                     />
                     <p className={styles.universityTitle}>In USA</p>
                     <p className={styles.universityFname}>
                        Massachusetts Institute of Technology (MIT)
                     </p>
                  </div>
                  <div
                     className=" universityCard shadow p-3 rounded m-auto mb-3"
                     style={{ width: "18rem" }}
                  >
                     <img
                        src={university3}
                        alt="university1"
                        style={{ width: "100%" }}
                        className="rounded mb-3"
                     />
                     <p className={styles.universityTitle}>In USA</p>
                     <p className={styles.universityFname}>
                        Massachusetts Institute of Technology (MIT)
                     </p>
                  </div>
                  <div
                     className=" universityCard shadow p-3 rounded m-auto mb-3"
                     style={{ width: "18rem" }}
                  >
                     <img
                        src={university4}
                        alt="university1"
                        style={{ width: "100%" }}
                        className="rounded mb-3"
                     />
                     <p className={styles.universityTitle}>In USA</p>
                     <p className={styles.universityFname}>
                        Massachusetts Institute of Technology (MIT)
                     </p>
                  </div>
               </div>
            </div>

            {/* aboutus */}

            <div className="aboutusContainer shadow">
               <div
                  className={`${styles.titleBar} d-flex py-4 m-0 shapeParent`}
               >
                  <div className="shape"></div>
                  <h2 className="fs-4 ms-4">About Us</h2>
               </div>
               <p className="aboutusText px-5 pb-5">
                  We aim for the upliftment of a community with better
                  opportunities. Studying abroad might be a distant dream for
                  you because of the huge amount you have to pay as a commission
                  for middlemen and other financial requirements. We are here to
                  take you to the heights you deserve with no monetary
                  constraints. If you’ve been thinking about studying abroad
                  options, let’s work together to find a suitable course,
                  country and university for you.
               </p>
            </div>

            {/* Most popular University */}

            <div className="universityContainer my-5">
               <div className={`${styles.titleBar} d-flex shapeParent`}>
                  <div className="shape"></div>
                  <h2 className="fs-4 ms-4">Popular Universities</h2>
                  <Link
                     to="/universities"
                     className={`${styles.titleTag} ms-auto py-2 px-3 shadow`}
                  >
                     View all 1900+ University
                  </Link>
               </div>
               <div className="universityList d-lg-flex justify-content-between gap-5">
                  <div
                     className="universityCard shadow p-3 rounded m-auto mb-3"
                     style={{ width: "18rem" }}
                  >
                     <img
                        src={university1}
                        alt="university1"
                        style={{ width: "100%" }}
                        className="rounded mb-3"
                     />
                     <p className={styles.universityTitle}>In USA</p>
                     <p className={styles.universityFname}>
                        Massachusetts Institute of Technology (MIT)
                     </p>
                  </div>
                  <div
                     className="universityCard shadow p-3 rounded m-auto mb-3"
                     style={{ width: "18rem" }}
                  >
                     <img
                        src={university2}
                        alt="university1"
                        style={{ width: "100%" }}
                        className="rounded mb-3"
                     />
                     <p className={styles.universityTitle}>In USA</p>
                     <p className={styles.universityFname}>
                        Massachusetts Institute of Technology (MIT)
                     </p>
                  </div>
                  <div
                     className="universityCard shadow p-3 rounded m-auto mb-3"
                     style={{ width: "18rem" }}
                  >
                     <img
                        src={university3}
                        alt="university1"
                        style={{ width: "100%" }}
                        className="rounded mb-3"
                     />
                     <p className={styles.universityTitle}>In USA</p>
                     <p className={styles.universityFname}>
                        Massachusetts Institute of Technology (MIT)
                     </p>
                  </div>
                  <div
                     className="universityCard shadow p-3 rounded m-auto mb-3"
                     style={{ width: "18rem" }}
                  >
                     <img
                        src={university4}
                        alt="university1"
                        style={{ width: "100%" }}
                        className="rounded mb-3"
                     />
                     <p className={styles.universityTitle}>In USA</p>
                     <p className={styles.universityFname}>
                        Massachusetts Institute of Technology (MIT)
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default Home;
