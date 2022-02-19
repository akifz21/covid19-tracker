import axios from "axios";
import { createContext,useEffect,useState } from "react";


const ContinentsContext = createContext();


export const ContinentsProvider = ({children})=>{

    const [continents, setContinents] = useState([])


    useEffect(()=>{
        axios("https://disease.sh/v3/covid-19/continents")
        .then((res)=>setContinents(res.data))
    },[])


    const values = {
        continents
    }

    return <ContinentsContext.Provider value={values}>{children}</ContinentsContext.Provider>
}

export default ContinentsContext