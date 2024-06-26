import React, { Children, createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from "firebase/auth"; 
import logout from '../components/Logout';


import { signOut } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password); //
            
    }
   const loginwithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
   } 

   const login = (email, password) => {
    setLoading()
    return signInWithEmailAndPassword(auth, email, password);
   }

   const logout = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return () => {
            return unsubscribe();

        }
    }, [])
    const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        loading,
        login,
        logout
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
  )
}

export default AuthProvider