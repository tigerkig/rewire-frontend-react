import { createContext, useState } from 'react';

export const PopupContext = createContext();

export const PopupContextProvider = ({ children}) => {
    const [showCreatePostPopup , setShowCreatePostPopup ] = useState(false);
    const [currentPopup , setCurrentPopup ] = useState('createPost');
    const [showFeedbackPopup , setShowFeedbackPopup] = useState(false);
    const [showCreatePagePopup , setShowCreatePagePopup] = useState(false);
    const [createPageView , setCreatePageView] = useState('create');

    return (
        <PopupContext.Provider  value={{
            currentPopup , setCurrentPopup , 
            showCreatePostPopup , setShowCreatePostPopup , 
            showFeedbackPopup , setShowFeedbackPopup ,
            showCreatePagePopup , setShowCreatePagePopup , 
            createPageView , setCreatePageView 
        }}>
            {children}
        </PopupContext.Provider>
    )
}
