import React from "react";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../zustang/useConversation";
import { extractTime } from "../utils/extractTime";

function SenderChat({ message}) {
  const {authUser}= useAuthContext(); 
  const {selectedConversation}=useConversation();
  const fromMe= message.senderId === authUser._id;
  const chatclassName= fromMe? 'chat-end': 'chat-start';
  const bgcolor= fromMe? 'bg-violet-400 text-black': '';
  const Time = extractTime(message.createdAt);
  return (
    <div>
      <div className={`chat ${chatclassName} flex flex-col `}>
        <div className={`chat-bubble ${bgcolor} `}>{message.message}</div>
        <div className="text-gray-600">{Time}</div>
      </div>
    </div>
  );
}

export default SenderChat;
