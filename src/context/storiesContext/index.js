import { createContext , useState } from 'react';

export const StoriesContext = createContext();

export const StoriesContextProvider = ({ children }) => {
    const [storySearch , setStorySearch] = useState('');
    const [currentStory , setCurrentStory] = useState('');


    return (
        <StoriesContext.Provider value={{
            storySearch , setStorySearch , currentStory , setCurrentStory
        }}>
            {children}
        </StoriesContext.Provider>
    )
}
