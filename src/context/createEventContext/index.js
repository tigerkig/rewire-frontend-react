import { createContext , useContext, useState } from 'react';


const EventContext = createContext();

export const useCreateEventContext = () => useContext(EventContext)

const EventContextProvider = ({ children }) => {
    const [showEventPopup , setShowEventPopup] = useState(false);
    const [currentEventView , setCurrentEventView] = useState('select');
    const [eventType , setEventType] = useState('online');
   

    return (
        <EventContext.Provider
            value={{
                showEventPopup , setShowEventPopup , 
                currentEventView , setCurrentEventView ,
                eventType , setEventType ,
            }}
        >
            {children}
        </EventContext.Provider>
    )
}

export default EventContextProvider;