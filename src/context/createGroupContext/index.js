import { createContext , useState , useContext } from 'react';

const GroupContext = createContext();

export const useGroupContext = () => useContext(GroupContext);

const GroupContextProvider = ({ children }) => {
    const [groupView , setGroupView] = useState('create');
    const [showGroupPopup , setShowGroupPopup] = useState(false);
    const [myGroups , setMyGroups] = useState([]);
    const [allGroups , setAllGroups] = useState([]);
    const [groupDetails , setGroupDetails] = useState();

    return (
        <GroupContext.Provider 
        value={{
            groupView , setGroupView , showGroupPopup , setShowGroupPopup , myGroups , setMyGroups , allGroups , setAllGroups , groupDetails , setGroupDetails 
        }}
        >
            {children}
        </GroupContext.Provider>
    )
}

export default GroupContextProvider;