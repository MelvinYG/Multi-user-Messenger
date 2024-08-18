import './chatArea.css';
const ChatTop = () => {
  return (
    <div className='flex items-center px-4 gap-4 bg-[whitesmoke] h-[80px] w-[100%]'>
      <div className="profile-img-container">
        <img src="./avatar.jpg" alt="" />
      </div>
      <div className="profile-details">
        <div className="details-top flex gap-4">
            <div className="profile-username">
                Kristine
            </div>
            <span>
                Online
            </span>
        </div>
        <div className="details-bottom">
            typing...
        </div>
      </div>
    </div>
  )
};

export default ChatTop;