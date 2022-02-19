import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CountriesContext from '../context/CountriesContext'

function Countries() {


  const { countries } = useContext(CountriesContext)


  return (
    <div id='countries-grid'>
      {
        countries.map((country, index) => (
          <div className='grid-item' key={index}><Link to={`/countries/${country.country}`}> <img src={country.countryInfo.flag} alt="country-flag" /><h2>{country.country} </h2> </Link> </div>
        ))
      }
    </div>

  )
}

export default Countries