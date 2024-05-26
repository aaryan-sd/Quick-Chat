import React, {useRef, useEffect} from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import Messages from "./Messages";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMsg from "../../hooks/useListenMsg";

const MsgsArea = () => {
  const { loading, messages } = useGetMessages();
  useListenMsg();

  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behaviour: "smooth"});
    },100)
  },[messages])

  return (
    <>
      <div>
        {!loading &&
          messages.length > 0 &&
          messages.map((message,index) => (
            <div key={`${message._id}-${index}`} ref={lastMessageRef}>
              <Messages message={message}/>
            </div>
          ))}
      </div>
    </>
  );
};

export default MsgsArea;
