import React from 'react';
import '../Sidebar/Sidebar.css';

const Sidebar = (Props) => {
    let totalMinutes = Props.minutes;
    const allBookmarkedItem = Props.bookmarksItem;

    
    return (
        <div className='siderbar-inner'>
            <div className="">
                <div className="total-time">
                    <p>Spent time on read : {totalMinutes} min</p>
                </div>
                <div className="bookmark-box">
                    <p className='total-bookmark-num'>Bookmarked Blogs : {allBookmarkedItem.length}</p>
                    {
                        allBookmarkedItem.map(sinlgItems => <p className='marked-item' key="">{sinlgItems.title}</p>)
                    }
                    
                    
                    
                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;