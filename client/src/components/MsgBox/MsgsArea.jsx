import React from "react";

const MsgsArea = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-8 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
  <time className="text-xs text-gray-400 opacity-90">12:45</time>
</div>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-8 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-bubble">It was you who would bring balance to the Force</div>
</div>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-8 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-bubble">Not leave it in Darkness</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-primary">Calm down, Anakin.</div>
</div>
    </div>
  );
};

export default MsgsArea;
