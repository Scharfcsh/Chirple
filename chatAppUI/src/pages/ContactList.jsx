import React from 'react'
import SearchBar from './SearchBar';
import Conversation from './Conversation';

function ContactList() {
  return (
    <div className='flex flex-col w-[500px] h-full  bg-gray-900 '>
        <SearchBar />
        <Conversation />

    </div>
  )
}

export default ContactList