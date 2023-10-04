import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import { Button } from "@mui/material";

import ListOfCountries from './components/ListOfCountries';

// function ListOfCountries() {
//   return <h1></h1>
// }



function App() {
  const [countryInput, setCountryInput] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await fetch(" https://restcountries.com/v3.1/all");
        //we use template literal 

        // console.log(response);

        const data = await response.json();

        setCountryInput(data);

      } catch (error) {
        console.log(error);
      }
    };

    getCountries();

  }, []);



  return (
    <div>
      <ListOfCountries countryInput={countryInput} />
    </div>
    // {/* <Button variant="contained" color="secondary">Dream Destination</Button> */}
  )



  // return <>
  // {countryInput.map(country => country.common)}
  // </>;



  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   getCountries();
  // };
  // console.log(countryInput);

  // return (
  //   <form onSubmit={onSubmit}>
  //     <input value={countryInput} onChange={(event) => setCountryInput(event.target.value)} />

  //     <button>Submit form</button>
  //   </form>
  // );


};


export default App
