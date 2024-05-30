import React from "react";
import useGetPeople from "../../hooks/useGetPeople";
import Conversation from "./Conversation"

const People = ({ onConversationClick }) => {
  const {loading, people} = useGetPeople();
  return (
    <div
      className="h-[425px]  sm:h-[426px] lg:h-[426px] md:h-[376px]  overflow-y-scroll "
      onClick={onConversationClick}
    >
      {people.map((conversation, index) => (
        <Conversation key={conversation._id} conversation={conversation} lastIndex={index === people.length - 1} />
      ))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
};

export default People;
