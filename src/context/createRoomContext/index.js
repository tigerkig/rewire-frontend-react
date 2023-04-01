import { createContext , useState } from 'react';

export const CreateRoomContext = createContext();


const CreateRoomContextProvider = ({ children }) => {
    const [showRoomPopup , setShowRoomPopup] = useState(false);
    return (
        <CreateRoomContext.Provider
            value={{
                showRoomPopup , setShowRoomPopup
            }}
        >
            {children}
        </CreateRoomContext.Provider>
    )
}

export default CreateRoomContextProvider;