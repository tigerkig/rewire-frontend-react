import { createContext , useContext , useState } from 'react';

const PostsContext = createContext();

export const usePostsContext = () => useContext(PostsContext);

const PostsContextProvider = ({ children}) => {
    const [posts , setPosts] = useState();

    return <PostsContext.Provider value={{
        posts , setPosts
    }}>
        {children}
    </PostsContext.Provider>
}

export default PostsContextProvider ;

