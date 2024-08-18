import { useState } from 'react';
import List from '../list/list';
import './allChatList.css';

const AllChatList = () => {
    const [tab,setTab] = useState("all");

    return (
        <div className='flex-1 pr-3'>
            <div className=''>
                <div className=" pb-2 border-b border-grey">
                    <div className="search-box border border-grey bg-[#f0eeee] rounded-md px-2">
                        <img src="./search.png" alt="search" />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="tabs flex gap-2 py-2 border-b border-grey">
                    <div className={`tab + ${tab === "all" ? "bg-orange-400 text-white" : ""} ` } onClick={() => {setTab("all")}}>
                        All
                    </div>
                    <div className={`tab + ${tab === "unread" ? "bg-orange-400 text-white" : ""} ` } onClick={() => {setTab("unread")}}>
                        Unread
                    </div>
                    <div className={`tab + ${tab === "archived" ? "bg-orange-400 text-white" : ""} ` } onClick={() => {setTab("archived")}}>
                        Archived
                    </div>
                    <div className={`tab + ${tab === "blocked" ? "bg-orange-400 text-white" : ""} ` } onClick={() => {setTab("blocked")}}>
                        Blocked
                    </div>
                </div>
            </div>
            <div className="recent-chats-list">
                <List/>
            </div>

        </div>
    )
};

export default AllChatList;
