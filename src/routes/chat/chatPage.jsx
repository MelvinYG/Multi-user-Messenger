import AllChatList from "../../components/allChatList/allChatList";
import ChatArea from "../../components/chatArea/chatArea";

const ChatPage = () => {
  return (
    <div className='flex mx-20'>
      <AllChatList/>
      <ChatArea/>
    </div>
  )
};

export default ChatPage;
