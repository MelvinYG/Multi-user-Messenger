import ChatBottom from "./chatBottom";
import ChatTop from "./chatTop";

const ChatArea = () => {
  return (
    <div className="flex-[2_2_0%] flex flex-col px-2 border-l border-grey">
     <ChatTop/>

     <ChatBottom/>
    </div>
  )
};

export default ChatArea;
