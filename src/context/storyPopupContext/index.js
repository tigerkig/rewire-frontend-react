import { createContext , useState } from 'react';

export const StoryPopupContext = createContext();

const StoryPopupContextProvider = ({ children }) => {
    const [currentStoryPopup , setCurrentStoryPopup] = useState('create');
    const [showStoryPopup , setShowStoryPopup] = useState(false);
    return (
        <StoryPopupContext.Provider
            value={{
                currentStoryPopup , setCurrentStoryPopup , showStoryPopup , 
                setShowStoryPopup
            }}
        >
            {children}
        </StoryPopupContext.Provider>
    )

}

export default StoryPopupContextProvider;