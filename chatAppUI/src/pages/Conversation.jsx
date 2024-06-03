import React from 'react'
import Message from './Message'
import useGetConversation from '../hooks/useGetConversation'

function Conversation() {
  const {loading, conversations}=useGetConversation();
  // console.log("CONVERSATION",conversations)
  return (
    <div id='conversation' className=' flex-col mt-2 overflow-auto'>
        {conversations.map((conversation)=>(
          <Message
          key={conversation._id}
          conversation={conversation}/>
          
        ))}

        {loading?<span className='loading loading-spinner'></span>:null}
    </div>
  )
}

export default Conversation