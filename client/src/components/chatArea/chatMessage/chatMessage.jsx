import './chatMessage.css';

const ChatMessage = (prop) => {

    const owns =  prop.owns;
    const imgType = prop.img ? true : false;

    return (
        <>
            <div className={owns ? 'message owns' : 'message'}>
                {!owns && (
                    <img src={"./avatar.jpg"} alt="" className='profile-pic' />
                )}
                {!imgType && (
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, possimus!</p>
                        {/* <span>{message}</span> */}
                    </div>)
                }
                {imgType && (
                    <div className="shared-img">
                        <img src={'./wallpaper-1.jpg'} alt='' />
                    </div>
                )}
            </div>
        </>
    )
};

export default ChatMessage;