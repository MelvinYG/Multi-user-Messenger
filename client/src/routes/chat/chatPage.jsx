import AllChatList from "../../components/allChatList/allChatList";
import ChatArea from "../../components/chatArea/chatArea";

const ChatPage = () => {
  return (
    <div className='flex mx-16 py-5 h-[100vh] overflow-hidden'>
      <AllChatList/>
      <ChatArea/>
    </div>
  )
};

export default ChatPage;
