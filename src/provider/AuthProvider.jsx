
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = async (updatedData) => {
        try {
            await updateProfile(auth.currentUser, updatedData);
            // Update the user state after successfully updating the profile
            setUser({
                ...auth.currentUser, 
                displayName: updatedData.displayName, 
                photoURL: updatedData.photoURL, 
            });
        } catch (error) {
            console.error("Error updating profile:", error);
            throw error; 
        }
    };
    const passwordResetEmail = (email) => {
        return sendPasswordResetEmail(auth, email);
    };
   
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {

            console.log(currentUser)
          
          if (currentUser?.email) {
            setUser(currentUser)
            const { data } = await axios.post(
              `http://localhost:3000/jwt`,
              {
                email: currentUser?.email,
              },
              { withCredentials: true }
            )
            console.log(data)
          } else {
            setUser(currentUser)
            const { data } = await axios.get(
              `http://localhost:3000/logout`,
              { withCredentials: true }
            )
          }
          setLoading(false)
        })
        return () => {
          return unsubscribe()
        }
      }, [])
      

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleSignIn,
        logout,
        setUser,
        passwordResetEmail,
     
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;