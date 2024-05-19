import React from 'react'
import { FiSend } from "react-icons/fi";

const MsgTypeArea = () => {
  return (
    <div className='w-full relative bg-gray-800 rounded-3xl'>
        <input
          type="text"
          className="w-[450px] flex-1 bg-gray-800 outline-none rounded-3xl p-2 mr-2"
          placeholder="Type your message..."
        />
        <button className="absolute text-blue-400 px-4 py-2 rounded-lg">
        <FiSend size={25}/>
        </button>
      
    </div>
  )
}

export default MsgTypeArea
