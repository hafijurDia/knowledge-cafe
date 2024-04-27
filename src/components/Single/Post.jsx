import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Post.css';

const Post = (Props) => {
    const {id, userId, authoName, authorImage, blogImage, body, publishedDate ,title, duration} = Props.blog;

    const addMinute = Props.addMinute;
    const addToBookmark = Props.addToBookmark;

    return (
        <div>
             <div className="single-blog"> 
            <div className="blog-image">
                <img src={blogImage} alt="Post Image" />
            </div>
            <div className="author-info">
                <div className="author">
                    <img src={authorImage} alt="" />
                    <div className="name-date">
                        <h4>{authoName}</h4>
                        <p>{publishedDate} (4 Days ago)</p>
                    </div>
                </div>
                <div className="bookmark">
                    <p> <span>{duration}</span> min read <button onClick={()=>addToBookmark(Props.blog)}><FontAwesomeIcon icon={faBookmark} /></button></p>
                </div>
                
            </div>
            <div className="blog-short-detail">
                <h1 className="b-title">{title}</h1>
            </div>
            <div className="blog-tags">
                <p>#beginners #programming</p>
            </div>
            <div className="mark-as-read">
                <span onClick={()=> addMinute(Props.blog)}>Mark as read</span>
            </div>
        </div>
            
        </div>
    );
};

export default Post;