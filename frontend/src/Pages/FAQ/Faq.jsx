import { useState } from "react";

import downArrow from "../../assets/icons/down arrow.svg";

import style from "./Faq.module.css";

function Faq({ show }) {
   show(true);
   const [selected, setSelected] = useState(null);

   const toggle = (i) => {
      if (selected === i) {
         return setSelected(null);
      }
      setSelected(i);
   };

   const data = [
      {
         title: "1. What is the apt time for submitting an application form to the Universities ?",
         answer:
            "Major institutions in a particular country may have one, two or three intakes during an academic year. So you should take steps at least one year in advance for the respective intake.",
      },
      {
         title: "2. What is an application package ?",
         answer:
            "An application package include materials required by the university. It consists of application forms, application fees recommendations transcripts and mark sheets essays financial aid form.",
      },
      {
         title: "3. What are the entry requirements ?",
         answer:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nobis earum porro repellendus, explicabo placeat velit cumque quia magnam eos modi itaque asperiores doloribus consectetur dolorem ducimus autem quam necessitatibus.",
      },
      {
         title: "4. What is the procedure for the student who does not have the minimum entry qualification?",
         answer:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nobis earum porro repellendus, explicabo placeat velit cumque quia magnam eos modi itaque asperiores doloribus consectetur dolorem ducimus autem quam necessitatibus.",
      },
   ];
   return (
      <section id="faqSection " className="my-5">
         <div className="faqTitle mb-5">
            <h2 className="fw-bold" style={{ marginInline: "18%" }}>
               Frequently Asked Questions
            </h2>
            <hr style={{ border: "1px solid light-gray" }} />
         </div>
         <div className="container d-flex flex-column align-items-center gap-4">
            {data.map((item, i) => (
               <div
                  className={`${style.faq} rounded shadow-sm p-3`}
                  onClick={() => toggle(i)}
                  key={i}
               >
                  <div className="question">
                     <p className="d-flex justify-content-between align-items-center m-0">
                        {item.title}
                        <img src={downArrow} alt="down arrow" />
                     </p>
                  </div>
                  <div
                     className={
                        selected === i
                           ? `${style.answer} ${style.show}`
                           : `${style.answer}`
                     }
                  >
                     <hr className={style.answerLine} />
                     <p className="px-3 text-secondary">{item.answer}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}

export default Faq;
