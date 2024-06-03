import React from 'react'
import ContactList from './ContactList'
import MessageBox from './MessageBox'
import Sidebar from './Sidebar'


function DashBoard() {
  return (
    <>
    <div className='flex flex-row w-full h-screen'>

        <Sidebar/>
        <ContactList/>
        <MessageBox/>
        {/* <RecieverInfo/> */}
    </div>
    </>
  )
}

export default DashBoard