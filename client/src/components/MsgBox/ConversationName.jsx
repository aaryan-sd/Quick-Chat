import React from 'react'
import { IoChevronBack } from "react-icons/io5";

const ConversationName = () => {
  return (
    <div className="flex items-center bg-gray-800 rounded-full p-2 w-full">
        <div>
        <IoChevronBack />
        </div>
      <img
        src={"https://avatar.iran.liara.run/public/boy"}
        alt="Profile"
        className="w-10 h-10 rounded-full ml-2"
      />
      <div className="ml-4">
        <div className="text-sm font-semibold">Conversation Name</div>
        <div className='text-[0.7rem]'>Active Now</div>
      </div>
      
    </div>
  )
}

export default ConversationName
