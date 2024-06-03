import React from "react";
import Chats from "./Chats";
import useConversation from "../zustang/useConversation";

import SendMessage from "./SendMessage";
import Finalchat from "./Finalchat";
import { useEffect } from "react";

function MessageBox() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() =>{
    return ()=>setSelectedConversation(null);
  },[])
  return (
    <>
      {!selectedConversation ? (
        <Finalchat />
      ) : (
        <>
          <div id="messagebox" className="w-full md:min-w-[450px] bg-gray-900 border-l-[1px] border-indigo-500 ">
            <div
              id="namebar"
              className=" flex h-[78px] p-2 bg-black flex-row gap-4 items-center "
            >
              <div className="avatar">
                <div className="w-16 ml-5 rounded-full">
                  <img src={selectedConversation?.ProfilePic} />
                </div>
              </div>
              <div>
                <h1 className=" font-bold text-[22px]">
                  {selectedConversation?.fullname}
                </h1>
              </div>
            </div>
            <Chats />

            <SendMessage />
          </div>
        </>
      )}
    </>
  );
}

export default MessageBox;
