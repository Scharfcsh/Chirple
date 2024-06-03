import React from "react";
import LogoutButton from "../components/LogoutButton";

function Sidebar() {
  const user = JSON.parse(localStorage.getItem("chat-user"));
  
  return (
    <div className="w-[80px] flex flex-col">
      <div className="h-[90%] bg-black items-center justify-center">
        <div className="avatar mt-3 ml-2">
          <div className="w-16 rounded-full ">
            <img src={user.ProfilePic} />
          </div>
        </div>
      </div>

      <LogoutButton />
    </div>
  );
}

export default Sidebar;
