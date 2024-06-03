import React from 'react'

function SearchBar() {
  return (
    <form action="" className='flex flex-col bg-black justify-center gap-2  p-2  h-[95px] '>
      <h1 className='text-3xl ml-6'>Chats</h1>
        <input type="text"  placeholder='Search..' className='input input-bordered rounded-3xl w-10/12 h-[40px] bg-transparent ml-6 border-neutral-600 border-b-indigo-500 outline-none'/>
    </form>
  )
}

export default SearchBar