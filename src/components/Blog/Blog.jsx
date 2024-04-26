import React from 'react';
import '../Blog/Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
    return (
        <div>
            <div className="single-blog">
                
            <div className="blog-image">
                <img src="../../../public/images/Rectangle 1.jpg" alt="" />
            </div>
            <div className="author-info">
                <div className="author">
                    <img src="../../../public/images/user.jpg" alt="" />
                    <div className="name-date">
                        <h4>Mr. Raju</h4>
                        <p>Mar 14 (4 Days ago)</p>
                    </div>
                </div>
                <div className="bookmark">
                    <p>05 min read <FontAwesomeIcon icon={faBookmark} /></p>
                </div>
                
            </div>
            <div className="blog-short-detail">
                <h1 className="b-title">How to get your first job as a self-taught programmer</h1>
            </div>
            <div className="blog-tags">
                <p>#beginners #programming</p>
            </div>
            <div className="mark-as-read">
                <a href="#">Mark as read</a>
            </div>
        </div>
        </div>
    );
};

export default Blog;