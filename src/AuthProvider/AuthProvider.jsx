import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null) 
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const register = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider()

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
            if(currentUser && currentUser.email){
                const loggedUser = {
                    email : currentUser.email
                }
                fetch(`https://super-car-toy-server.vercel.app/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(res =>res.json())
                .then(data => {
                    console.log(data);
                    localStorage.setItem('access-token', data.token)
                })
            }
            else{
            localStorage.removeItem('access-token')
            }
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        register,
        login,
        logout,
        googleLogin

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;