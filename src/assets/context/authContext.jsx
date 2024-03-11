import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/firebase.config";

export const authContext = createContext(); 

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('There is not auth provider')
    return context
};

export default function AuthProvider({ children }) {
    const signUp = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    };

    return (
        <authContext.Provider value={{ signUp }}>
            {children}
        </authContext.Provider>
    );
}
