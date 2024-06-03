import React from "react";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../zustang/useConversation";

function SenderChat({ message}) {
  // const {authUser}= useAuthContext(); 
  // const {selectedconversation}=useConversation();
  // const fromMe= message._id === authUser._id;
  // const chatclassName= fromMe? 'chat-end': 'chat-start';
  // const bgcolor= fromMe? 'bg-violet-400 text-black': '';
  return (
    <div>
      <div className={`chat chat-end `}>
        <div className={`chat-bubble bg-violet-400 text-black `}>{message}</div>
      </div>
    </div>
  );
}

export default SenderChat;
