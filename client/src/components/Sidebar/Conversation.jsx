import React from "react";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  

  return (
    <>
      <div className={`flex items-center gap-4 hover:bg-blue-600 rounded py-1 cursor-pointer ${isSelected ? "bg-blue-600" : "" }`} onClick={() => {setSelectedConversation(conversation)}}>
        <div className={`avatar w-12 h-12 rounded-full ml-2`}>
          <img src={conversation.profilePic} alt="Profile" />
        </div>
        <div>{conversation.fullname}</div>
      </div>
      <div className="divider divider-neutral m-1"></div>
    </>
  );
};

export default Conversation;
