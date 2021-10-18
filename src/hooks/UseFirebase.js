import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/FirbaseInitialize";
initializeAuthentication();

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false);



    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGooggle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])





    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            alert('Passwor at least 6 charecter long')
            return;
        }
        isLogin ? processLogin(email, password) : registerNewUser(email, password);

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                alert(error.message)
            })

    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                veryfiEmail();
            })
            .catch((error) => {
                alert(error.message);
            })
    }
    const veryfiEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }

    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => { })
            .catch((error => {
                alert(error.message)
            }))
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }


    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }





    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }
    return {
        user,
        signInUsingGooggle,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        resetPassword,
        isLogin,
        isLoading,
    }
}
export default useFirebase;