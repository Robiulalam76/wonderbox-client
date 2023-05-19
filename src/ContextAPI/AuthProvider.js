import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({})
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const token = localStorage.getItem('wonderboxtoken')
    console.log(user);
    const userRefetch = () => {
        fetch(`http://localhost:5000/api/user/me`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("wonderboxtoken")}`,
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setUser(data));
    }

    useEffect(() => {
        userRefetch()
    }, [token]);


    const authInfo = {
        user,
        userRefetch,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;