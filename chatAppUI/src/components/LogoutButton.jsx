import React from 'react'
import { MdLogout } from "react-icons/md";
import useLogout from '../hooks/useLogout';
function LogoutButton() {
    const {loading, logout}= useLogout();
  return (
    <div className='text-5xl font-bold text-white h-[100px] bg-black '>
        {!loading ?(<MdLogout className='ml-5 mt-6 cursor-pointer'
        onClick={logout} />):(
            <span className='loading loading-spinner'></span>
        )}
        
    </div>
  )
}

export default LogoutButton