import React from "react";
import logo from "../../img/logo.png";

const Navigation = ({ navigation }) => {
  return (
    <div className="p-50 flex flex-column align-center bg-light-gray ">
      <img src={logo} alt="logo" />
      <div>
        <ul className="list-none flex flex-column ">
          {navigation.map((el, index) => (
            <li key={index} className="mt-100-p flex gap-4">
              <img src={el.src} />
              <a href={el.path} className="decoration-none">
                {el.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
