import React, { useState } from "react";
import useConversation from "../zustang/useConversation";
import {useAuthContext} from "../context/AuthContext";
import { useSocketContext } from "../context/SocketContext";

function Message({conversation}) {
    // const [online,setOnline]= useState(false);
    const {selectedConversation, setSelectedConversation}=useConversation();
    const isSelected=selectedConversation?._id === conversation._id;
    const user = JSON.parse(window.localStorage.getItem("chat-user"));
    const {onlineUsers}= useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)
    // console.log(user);
  return (
    <div className={`flex flex-row p-3 gap-4 hover:bg-gray-700 cursor-pointer ${isSelected? "bg-indigo-700 hover:bg-indigo-500":""}`} onClick={()=>setSelectedConversation(conversation)}>
      <div className="">
        <div className={`avatar ${isOnline? "online":""}`}>
          <div className="w-14 rounded-full ml-6">
            <img src={conversation.ProfilePic} />
          </div>
        </div>
        {/* <div className="avatar offline">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div> */}
      </div>
      <div className="flex flex-col">
        {conversation._id===user._id?<h2 className="text-white font-semibold text-xl">You</h2>:
        <h2 className="text-white font-semibold text-xl">{conversation.fullname}</h2>
        }
        
        <p className="text-gray-400 text-[20px]">Hi this is me</p>

      </div>
    </div>
  );
}

export default Message;

