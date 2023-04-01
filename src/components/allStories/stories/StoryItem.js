import React from 'react'
import { allStoriesData } from './data'

const StoryItem = ({ user }) => {
    const userStory = allStoriesData.find(story => story.user === user.id );

    return (
        <div className='w-full story-item rounded-lg relative bg-light h-[300px] shadow-2'>
            <div className=''>
                {
                    userStory.type === 'image' 
                    ?   
                        <img src={userStory.media} alt='Story item' className='w-full rounded-lg h-[300px] object-cover absolute top-0 left-0'/>
                    : 
                    userStory.type === 'video'
                    ? 
                        <video src={userStory.media} muted className='rounded-lg h-[300px] w-full object-cover absolute top-0 left-0'/>
                    : ''
                }
            </div>
           
                <div 
                className="absolute left-[50%] translate-x-[-50%] bottom-2  flex items-center justify-center flex-col gap-2 z-10">
                    <div 
                    className="w-[50px] h-[50px] rounded-full overflow-hidden shadow-sm shadow-gray-600"
                    >
                        <img 
                        src={user?.image} 
                        alt={user?.name} 
                        className='w-[50px] h-[50px] rounded-full'
                        />
                    </div>
                    <span className="text-xs text-primary">{user?.firstName}</span>
                </div>

        </div>
    )
}

export default StoryItem