import { allStoriesData } from './data';
import { userData } from '../../../data/User';
import StoryItem from './StoryItem';

const Stories = () => {

    const storyUsers = allStoriesData.map((story , i) => {
        return userData?.find(user => story.user === user.id)
    })
       
 
    return (
        <div className='w-full h-full grid grid-cols-2 gap-4'>
            {
                storyUsers.map(user => (
                    <StoryItem  user={user}/>
                ))
            }
        </div>
    )
}

export default Stories