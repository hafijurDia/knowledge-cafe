import React from 'react';
import '../Sidebar/Sidebar.css';

const Sidebar = () => {
    return (
        <div>
            <div className="siderbar-inner">
                <div className="total-time">
                    <p>Spent time on read : 177 min</p>
                </div>
                <div className="bookmark-box">
                    <p className='total-bookmark-num'>Bookmarked Blogs : 8</p>
                    <p className="marked-item">Master Microsoft Power Platform and Become an In-Demand!</p>
                    <p className="marked-item">Master Microsoft Power Platform and Become an In-Demand!</p>
                    <p className="marked-item">Master Microsoft Power Platform and Become an In-Demand!</p>
                    <p className="marked-item">Master Microsoft Power Platform and Become an In-Demand!</p>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;