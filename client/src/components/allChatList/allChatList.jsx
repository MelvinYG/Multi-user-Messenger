import List from '../list/list';
import './allChatList.css';

const AllChatList = () => {
    return (
        <div className='flex-1'>
            <div className=''>
                <div className="bg-black">
                    <div className="search-box">
                        <img src="./search.png" alt="search" />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="tabs flex gap-2 my-2">
                    <div className="tab">
                        All
                    </div>
                    <div className="tab">
                        Unread
                    </div>
                    <div className="tab">
                        Archived
                    </div>
                    <div className="tab">
                        Blocked
                    </div>
                </div>
            </div>
            <div className="">
                <List/>
            </div>

        </div>
    )
};

export default AllChatList;
