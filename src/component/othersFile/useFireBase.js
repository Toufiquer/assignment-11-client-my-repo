import { useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import auth from "./firebase.init";

const provider = new GoogleAuthProvider();
const useFireBase = () => {
    const [user, SetUser] = useState({});
    const handleSingInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(res => SetUser(res.user))
            .catch(err => console.error(err));
        console.log(user);
    };
    const handleSignOut = () => {
        console.log("sing out");
        signOut(auth)
            .then(() => {})
            .catch(err => console.error(err));
    };
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            SetUser(user);
        });
    }, []);
    return { user, SetUser, handleSingInWithGoogle, handleSignOut };
};
export default useFireBase;
