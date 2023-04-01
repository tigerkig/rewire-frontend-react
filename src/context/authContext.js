import { useContext , createContext , useState } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [auth , setAuth ] = useState(null);

    return <AuthContext.Provider value={{ 
        auth , setAuth 
    }}>
        {children}
    </AuthContext.Provider>
}