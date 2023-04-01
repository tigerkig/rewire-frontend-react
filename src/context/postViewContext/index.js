import { useState , createContext } from 'react';

export const PostViewContext = createContext();

export const PostViewContextProvider = ({ children }) => {
    const [currentPostView , setCurrentPostView] = useState('text');
    const [postBg , setPostBg] = useState(null);
    const [showBgs , setShowBgs] = useState(false);

    return (
        <PostViewContext.Provider value={{
            currentPostView , setCurrentPostView , 
            postBg , setPostBg , showBgs , setShowBgs 
        }}>
            {children}
        </PostViewContext.Provider>
    )
}

export default PostViewContextProvider;