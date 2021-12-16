import React from 'react'
import './StoryReel.css';
import Story from './Story';
import a from './a.png';
import story1 from './a1.png';
import story2 from './a2.png';
import story3 from './a3.png';


function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            image={story1} profileSrc={a}
            title="Sanjeev Dubey"
            />

            <Story
            image={story2} 
            profileSrc={a}
            title="Test 1"
            />

            <Story
            image={story3} 
            profileSrc={a}
            title="Test 2"
            />


            {/* story */}
        </div>
    )
}

export default StoryReel
