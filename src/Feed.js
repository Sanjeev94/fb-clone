import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import a from './a.png';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
            profilePic={a}
            message="working"
            timestamp='This is timestamp'
            username='SkDubey'
            image='https://th.bing.com/th/id/OIP.9Wc9w2u5s_-CgzEEjvHn3QHaE7?pid=ImgDet&rs=1'
            />

            <Post
            profilePic={a}
            message="working"
            timestamp='This is timestamp'
            username='SkDubey'
            image='https://media.istockphoto.com/photos/binary-code-background-picture-id1046046242'
            />
            {/* StoryReel */}
            {/* MessageSender */}
            {/* post messages */}
            
        </div>
    )
}

export default Feed
