import axios from "axios";
import { createContext,useState,useEffect } from "react";


const GlobalContext = createContext();

export const GlobalProvider = ({children})=>{

    const [global,SetGlobal]=useState({})


    useEffect(()=>{
        axios("https://disease.sh/v3/covid-19/all")
        .then((res)=>SetGlobal(res.data))
    },[])


    const values = {
        global
    }

   

    return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
}


export default GlobalContext