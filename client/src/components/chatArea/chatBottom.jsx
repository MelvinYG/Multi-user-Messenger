const ChatBottom = () => {
    return (
        <div className="chatBottom px-5 py-3 border-t border-grey">
            <div className="flex justify-between bg-[whitesmoke] rounded-md py-2 px-5">
                <input type="text" placeholder="Type your message here" />
                <div className="flex gap-4">
                    <div className="util-container cursor-pointer">
                        <img src="./attachment.png" alt="" />
                    </div>
                    <div className="util-container send p-1 cursor-pointer">
                        <img src="./send.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ChatBottom;
