import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    // const [user, setUser] = useState(null)

    const authInfo = {
        user: 'vv'
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;