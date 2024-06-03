import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { FaPaperclip } from "react-icons/fa";
import useSendMessage from "../hooks/useSendMessage"

function SendMessage() {
  const [message, setMessage]=useState("");
  // const {loading,sendtheMessage}= useSendMessage();
  // const {loading , sendMessage} = useSendMessage();
  const {loading, sendMessage} = useSendMessage()
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(message);
    
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    
    <form className="flex items-center p-2 bg-transparent border-t-[1px] border-indigo-500 " onSubmit={handleSubmit}>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring">
        <MdEmojiEmotions className="text-2xl text-black"/>
        </button>

        <input
          type="text"
          placeholder="Your message here..."
          className="flex-grow mx-4 p-2 outline-none bg-transparent border-indigo-500"
          value={message}
          
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring">
          <FaPaperclip className="text-2xl text-black"/>
        </button>

        <button className="p-2 ml-2 rounded-full bg-indigo-900 hover:bg-red-600 focus:outline-none focus:ring" type='submit'>
          <IoSend className="text-2xl"/>
        </button>
      </form>
      
  )
}

export default SendMessage