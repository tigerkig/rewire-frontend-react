import React, { useContext } from 'react'
import { StoriesContext } from '../../../context/storiesContext';
import { Search } from '../../../svgs';

const AllStoriesHeader = () => {
    const { storySearch , setStorySearch } = useContext(StoriesContext);

    return (
        <div className='header shadow-2 dark:bg-dark_secondary bg-pure rounded-lg flex items-center justify-between p-4'>
            <h3 className='font-semibold text-lg text-dark'>Stories</h3>
            <div className="border border-gray-200 bg-light rounded-full py-2 px-3 text-base flex items-center w-[40%] gap-3">
                <Search />
                <input 
                className="bg-transparent border-none outline-none"
                type="text" 
                placeholder="Search for stories" 
                value={storySearch}
                onChange={(e) => {
                    setStorySearch(e.target.value);
                }}
                />
            </div>
        </div>
    )
}

export default AllStoriesHeader