import React from 'react';
import '../Sidebar/Sidebar.css';

const Sidebar = (Props) => {
    let totalMinutes = Props.minutes;
    let totalBookmarks = Props.bookmarks;
    const allBookmarkedItem = Props.bookmarksItem;
    
    return (
        <div>
            <div className="siderbar-inner">
                <div className="total-time">
                    <p>Spent time on read : {totalMinutes} min</p>
                </div>
                <div className="bookmark-box">
                    <p className='total-bookmark-num'>Bookmarked Blogs : {totalBookmarks}</p>
                    {
                        allBookmarkedItem.map(sinlgItems => <p className='marked-item'>{sinlgItems.title}</p>)
                    }
                    
                    
                    
                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;