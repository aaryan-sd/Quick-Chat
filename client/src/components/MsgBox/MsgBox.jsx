import React from "react";
import ConversationName from "./ConversationName";
import MsgsArea from "./MsgsArea";
import MsgTypeArea from "./MsgTypeArea";

const MsgBox = () => {
  return (
    <div className="h-[600px] bg-gray-700 ml-4 p-4 rounded-2xl shadow-md">
     
      <div className="mb-4">
        <div className="text-lg font-semibold">
          <ConversationName/>
        </div>
      </div>

     
      <div className="h-[430px] p-4 mb-4 rounded-lg shadow-md">
        <MsgsArea/>
      </div>

      {/* Message Typing Bar and Send Button */}
      <div className="flex">
        <MsgTypeArea/>
      </div>
    </div>
  );
};

export default MsgBox;
