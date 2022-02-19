import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import ContinentsContext from '../context/ContinentsContext';
import GlobalContext from '../context/GlobalContext'

function Home() {

  const { global } = useContext(GlobalContext);
  const { continents } = useContext(ContinentsContext);



  return (
    <div id='home'>
      <div className='grid-item'>
         <h1>Covid-19 Global Data</h1>
       <p>World Population :   {global.population}</p> 
        <p> World Active Cases :  {global.active}</p>
        <p> World Affected Countries :  {global.affectedCountries}</p>
       <p>World Total Cases :  {global.cases}</p>
       <p>World Recovered :  {global.recovered} </p>
       <Link to="/countries"><button>See Countries</button></Link>
      </div>
      <div id='continents'>
        {
          continents.map((continent,index) => {
            return(
              <div key={index} className='grid-item'>
               <h2>{continent.continent}</h2>
               <p>Population : {continent.population}</p>
                <p>Cases : {continent.cases}</p>
                <p>Deaths :{continent.deaths} </p>
                <p>Recovered: {continent.recovered}</p>
              </div>
            ) 
          })
        }
      </div>
      

    </div>
  )
}

export default Home