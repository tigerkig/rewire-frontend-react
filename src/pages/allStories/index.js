import './styles.css';
import Navbar from './../../components/navbar';
import LeftBar from '../../components/home/leftBar';
import AllStoriesHeader from '../../components/allStories/header';
import Stories from '../../components/allStories/stories';
import StoryPlay from '../../components/allStories/storyPlay';

const AllStories = () => {

    return (
        <div className='w-full min-h-screen dark:bg-dark_primary bg-light' >
            <Navbar />
            <div>
                <LeftBar />
                <div className='margin allStories-container py-4 pr-8 flex flex-col gap-4'>
                    <AllStoriesHeader />
                    <div className="w-full h-full stories-container flex justify-between">
                        <div className="flex-1">
                            <Stories />
                        </div>
                        <div className="flex-1 ">
                            <StoryPlay />
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default AllStories