import React, { useEffect, useState } from 'react';
import '../Blog/Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Post from '../Single/Post';
import Sidebar from '../Sidebar/Sidebar';



const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    const [minutes, setMinutes] = useState(0);
    const [bookmarks, setBookmarks] = useState(0);
    const [bookmarksItem, setBookmarksItem] = useState([]);
    console.log(bookmarksItem);


    useEffect(()=>{
        fetch('../../../fakeData/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
        
    },[])

// sum total minute and display
const addMinute = (blog) => {
   const {duration} = blog;
   const newMinutes = minutes + duration;
   setMinutes(newMinutes);
}

//add to bookmark
const addToBookmark = (blog) => {
    const newBookmarks = bookmarks + 1;
    setBookmarks(newBookmarks);
    const newBookmarksItem = [...bookmarksItem, blog]
    setBookmarksItem(newBookmarksItem);
    
}

    return (
        <div>
            <main>
          <div className='blog-content'>
          {
                blogs.map(blog => 
                <Post
                    key={blog.id}
                    blog={blog}
                    addMinute={addMinute}
                    addToBookmark={addToBookmark}
                >
                </Post>)
            }
          </div>
          <div className='sidebar'>
          <Sidebar 
          key={bookmarksItem.id}
          minutes={minutes} 
          bookmarks={bookmarks} 
          bookmarksItem={bookmarksItem}
          >

          </Sidebar>
          </div>
          
        </main>
            
        </div>
    );
};

export default Blog;