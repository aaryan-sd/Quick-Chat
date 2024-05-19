import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../context/AuthContext';
import { BiLogOut } from "react-icons/bi";

const Profile = () => {
    

  return (
    <div className="flex items-center gap-4 w-full">
      <img
        src={"https://avatar.iran.liara.run/public/boy"}
        alt="Profile"
        className="w-16 h-16 rounded-full"
      />
      <div className='bg-[#7480ff] rounded-full flex p-4 w-full justify-between items-center'>
        <div>
          <div className=" text-lg text-black font-semibold">Aaryan Daiv</div>
        </div>
        <div className=" text-red-950">
        <BiLogOut size={24}/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
