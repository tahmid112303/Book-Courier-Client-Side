import React, { memo, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from './Firebase.init'

const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider()
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    const createAccount = (email,password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) => {
       setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignUp = () => {
       setLoading(true);
       return signInWithPopup(auth,provider);
    }

    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser)
        setLoading(false)
       })

       return () => {
          unSubscribe()
       }
    },[])

    const authData = {
        createAccount,
        signIn,
        googleSignUp,
        user,
        logOut,
        loading
    }

  return (
    <AuthContext value={authData}>
        {children}
    </AuthContext>
  )
}

export default memo(AuthProvider)