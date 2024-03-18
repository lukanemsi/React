import React from "react";
import SearchBar from "./Searchbar";
import User from "../elements/User";

const Header = ({ picture, user }) => {
  return (
    <div className="width-100-p">
      <div className="flex align-center justify-around">
        <div className="width-90-p">
          <SearchBar placeholder={"Search artists, projects"} />
        </div>
        <div >
          <User picture={picture} user={user} />
        </div>
      </div>
    </div>
  );
};

export default Header;
