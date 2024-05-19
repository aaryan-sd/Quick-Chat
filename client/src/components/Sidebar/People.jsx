import React from "react";
import Conversation from "./Conversation";
import Divider from "./Divider";

const People = () => {
  return (
    <div
      className="h-[400px] overflow-y-auto "
      style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
    >
      <Conversation />

      <Conversation />

      <Conversation />

      <Conversation />

      <Conversation />

      <Conversation />

      <Conversation />
    </div>
  );
};

export default People;
