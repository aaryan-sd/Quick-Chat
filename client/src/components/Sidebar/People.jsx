import React from "react";
import useGetPeople from "../../hooks/useGetPeople";
import Conversation from "./Conversation"

const People = () => {
  const {loading, people} = useGetPeople();
  return (
    <div
      className="h-[400px] overflow-y-auto "
      style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
    >
      {people.map((conversation, index) => (
        <Conversation key={conversation._id} conversation={conversation} lastIndex={index === people.length - 1} />
      ))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
};

export default People;
