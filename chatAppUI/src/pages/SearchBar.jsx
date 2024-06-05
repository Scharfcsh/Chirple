import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetConversation from "../hooks/useGetConversation";
import useConversation from "../zustang/useConversation";
import toast from "react-hot-toast";

function SearchBar() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-black justify-center gap-2  p-2  h-[95px] "
    >
      <h1 className="text-3xl ml-6">Chats</h1>
      <div className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="Search.."
          className="input input-bordered rounded-3xl w-10/12 h-[40px] bg-transparent ml-6 border-neutral-600 border-b-indigo-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-badge px-3 text-black bg-slate-500"
        >
          {" "}
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;

// 
// https://api.multiavatar.com/Binx Bond.svg
