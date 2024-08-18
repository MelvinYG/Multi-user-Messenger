import './message.css';

const Message = () => {
    return (
        <div className='flex p-3 gap-3'>
            <div className="img-container flex justify-center items-center">
                <img src="./avatar.jpg" alt="" />
            </div>
            <div className="message-details flex flex-col">
                <div className="details-top flex gap-2">
                    <p>Jane Doe</p>
                    <span className='status'> . </span>
                    <span className='text-xs'>11 days ago</span>
                </div>
                <div className="last-message-details text-sm">
                    <div className="last-sender">
                        Jeje: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta in error na
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Message;
