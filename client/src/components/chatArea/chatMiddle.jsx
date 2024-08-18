import ChatMessage from "./chatMessage/chatMessage";
import './chatMiddle.css';

const ChatMiddle = ({reference}) => {
  return (
    <div className='chat-center'>
                <ChatMessage owns={true} img={false}/>
                <ChatMessage owns={false} img={false}/>
                <ChatMessage owns={true} img={true}/>
                <ChatMessage owns={false} img={false}/>
                <ChatMessage owns={false} img={false}/>
                <ChatMessage owns={true} img={false}/>
                <ChatMessage owns={true} img={false}/>

                <div ref={reference}></div>
            </div>
  )
};

export default ChatMiddle;
