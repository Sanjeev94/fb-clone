import React from 'react'
import './StoryReel.css';
import Story from './Story';
// import a from './a.png';
import story1 from './a1.png';
import story2 from './a2.png';
import story3 from './a3.png';
import story4 from './a4.png';
import story5 from './a5.png';


function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            image={story1} profileSrc="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
            title="Sanjeev Dubey"
            />

            <Story
            image={story2} 
            profileSrc="https://avatars.dicebear.com/api/big-smile/your-custom-seed.svg"
            title="Test 1"
            />

            <Story
            image={story3} 
            profileSrc="https://avatars.dicebear.com/api/miniavs/your-custom-seed.svg"
            title="Test 2"
            />

            <Story
            image={story4} 
            profileSrc="https://avatars.dicebear.com/api/gridy/your-custom-seed.svg"
            title="Shri Ganesh"
            />

           <Story
            image={story5} 
            profileSrc="https://avatars.dicebear.com/api/open-peeps/your-custom-seed.svg"
            title="Shri Hanuman"
            />


            {/* story */}
        </div>
    )
}

export default StoryReel
