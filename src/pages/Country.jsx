import axios from 'axios'
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'



function Country() {

  const {country} = useParams()

  const [countryData,setCountryData]=useState({})
  const [flag,setFlag]=useState({})

    useEffect(()=>{
      axios(`https://disease.sh/v3/covid-19/countries/${country}`)
      .then((res)=>setCountryData(res.data))
    },[country])

    useEffect(()=>{
      axios(`https://disease.sh/v3/covid-19/countries/${country}`)
      .then((res)=>setFlag(res.data.countryInfo))
    },[country])


  return (
    <div id='country'>
      <h1>{countryData.country}</h1>
      <ul>
        <li id='img-li'><img src={flag.flag} /></li>
        <li><h2>Population :</h2>{countryData.population}</li>
        <li><h2>Continent :</h2>{countryData.continent}</li>
        <li><h2>Cases :</h2>{countryData.cases}</li>
        <li><h2>Deaths :</h2>{countryData.deaths}</li>
        <li><h2>Recovered :</h2>{countryData.recovered}</li>
      </ul>
    </div>
  )
}

export default Country