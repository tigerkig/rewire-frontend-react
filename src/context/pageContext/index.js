import { useContext , createContext , useState } from 'react';

const PageContext = createContext();

export const usePageContext = () => useContext(PageContext);

const PageContextProvider = ({ children }) => {
    const [myPages , setMyPages] = useState([]);
    const [allPages , setAllPages] = useState([]);
    const [pageData , setPageData] = useState();
    const [pageDetails , setPageDetails] = useState();

    return (
        <PageContext.Provider value={{ 
            myPages , setMyPages , allPages , setAllPages , pageData , setPageData , pageDetails , setPageDetails
        }}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContextProvider;