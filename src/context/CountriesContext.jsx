import axios from "axios";
import { createContext,useState, useEffect } from "react";


const CountriesContext = createContext();

export const CountriesProvider=({children})=>{

    const [countries,SetCountries]=useState([])
    const [flag,setFlag]=useState({})


    useEffect(()=>{
        axios("https://disease.sh/v3/covid-19/countries")
        .then((res)=>SetCountries(res.data))
    },[])

   
    const values = {
        countries,
       
    }

    return <CountriesContext.Provider value={values}>{children}</CountriesContext.Provider>
}

export default CountriesContext