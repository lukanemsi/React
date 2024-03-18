import React from "react";
import notifLogo from "../../img/notification.svg";
const User = ({ picture, user }) => {
  return (
    <>
      <div className="flex align-center justify-around gap-20">
        <img src={picture.src} alt={picture.alt} />
        <div>
          <h3>{user.name}</h3>
          <p>{user.role}</p>
        </div>
        <img src={notifLogo} alt="notification logo" />
      </div>
    </>
  );
};

export default User;
