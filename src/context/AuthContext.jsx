import { createContext, useEffect, useState } from "react";

// Create AuthContext
export const AuthContext = createContext();

// AuthContextProvider Component
export const AuthContextProvider = ({ children }) => {
    // Initialize currentUser state from localStorage or null
    const [currentUser, setCurrentUser] = useState(() => {
        // Use lazy initialization to ensure it runs only once on mount
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // Update user function
    const updateUser = (data) => {
        setCurrentUser(data);
    };

    // Sync currentUser with localStorage whenever it changes
    useEffect(() => {
        if (currentUser) {
            localStorage.setItem("user", JSON.stringify(currentUser));
        } else {
            localStorage.removeItem("user");  // If user is null, clean up storage
        }
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};
