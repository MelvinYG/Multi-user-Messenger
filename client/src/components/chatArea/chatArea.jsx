import { useEffect, useRef } from "react";
import ChatBottom from "./chatBottom";
import ChatTop from "./chatTop";
import ChatMiddle from "./chatMiddle";

const ChatArea = () => {
  const endRef = useRef(null);
  useEffect(() =>{
    if (endRef.current) {
        endRef.current.scrollIntoView({behavior: 'smooth'});
    }
}, []);
  return (
    <div className="flex-[2_2_0%] flex flex-col justify-between px-2 border-l border-grey h-[95vh]">
     <ChatTop/>
     <ChatMiddle reference={endRef}></ChatMiddle>
     <ChatBottom/>
    </div>
  )
};

export default ChatArea;
