import { createContext , useState , useContext } from 'react';

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

const SearchContextProvider = ({ children }) => {
    const [showSearch , setShowSearch] = useState(false);
    const [search , setSearch] = useState('');

    return (
        <SearchContext.Provider value={{
            showSearch , setShowSearch , search , setSearch
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider;