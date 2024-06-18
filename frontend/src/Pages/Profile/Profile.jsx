import { Link } from "react-router-dom";
import edit from '../../assets/Edit.svg';

function Profile() {
  return (
    <div className="container">
      <div className="p-2">
        <h2 style={{ color: "#067BC2" }}>Hello Suresh Raina 👋</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim
          voluptatum a quos fuga aperiam id reiciendis deserunt beatae, dolores,
          quis sint cum eum exercitationem harum laboriosam doloremque tempore
          hic.
        </p>
        <div className="titleBar d-flex shapeParent mt-5 ">
          <div className="shape"></div>
          <h2 className="fs-4 ms-4">Personal Details</h2>
          <Link className="ms-auto py-2 px-3 shadow">
            <img src={edit} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
