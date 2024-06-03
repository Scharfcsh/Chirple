import React from "react";
import RecieverChat from "./RecieverChat";
import SenderChat from "./SenderChat";
import useGetMessage from "../hooks/useGetMessage";
import MessageSkeleton from "../components/skeletons/MessageSkeleton";

function Chats() {
  const { messages, loading } = useGetMessage();
  console.log("messages", messages);
  messages.forEach(message => {
    console.log(message.fullname);
    
  });

  return (
    <div className="p-4 h-[85%] text-xl overflow-y-auto">
      <RecieverChat />
      <SenderChat />
      <RecieverChat />
      <SenderChat />
      <RecieverChat />
      <SenderChat />
      <RecieverChat />
      <SenderChat />
      {/* {!loading &&
        messages.length > 0 &&
        messages.forEach((message) => (
          
          <SenderChat key={message._id} message={message} />
        ))} */}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center"> Send a message to start a conversation</p>
      )}
    </div>
  );
}

export default Chats;
