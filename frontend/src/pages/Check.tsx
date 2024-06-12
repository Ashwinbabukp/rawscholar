import { useFrappeGetDocList } from "frappe-react-sdk";
import LoginAuth from "./LoginAuth";
// import { useState } from "react";

function Check() {
  // const [src, setSrc] = useState("");
  const { data,isLoading } = useFrappeGetDocList("Stud  ent", { fields: ["image"] });
  console.log(data,isLoading);

  return (
    <div>
      Rawscholar
      <LoginAuth />
      {
        !isLoading?<h1>not loading</h1>:<h1>loading</h1>
      }
      {data?.map((dat)=>(
        <img src={dat.image} alt="img" />
      ))}
    </div> 
  );
}

export default Check;
