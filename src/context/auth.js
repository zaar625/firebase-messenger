//파이어베이스에 로그인을 하고 리다이렉트를 하였으나, Logout UI가 변경되지 않는다. 따라서, 상태변화를 인지하도록 하여 UI를 변경할 예정
import { onAuthStateChanged } from "firebase/auth";
import {createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import {auth} from '../firebase'

export const AuthContext = createContext();
const AuthProvider = (props) => {
    const [user, setUser] = useState( null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        onAuthStateChanged(auth, (user)=>{
            setUser(user);
            setLoading(false);
        })
    },[]);
    if(loading){
        return <Loading/>
    }
    return <AuthContext.Provider value={{user}}>{props.children}</AuthContext.Provider>
};

export default AuthProvider