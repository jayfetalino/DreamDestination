import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import ListOfCountries from './components/ListOfCountries';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await fetch(" https://restcountries.com/v3.1/all");

        const data = await response.json();
        console.log(data);

        setCountries(data);

      } catch (error) {
        console.log(error);
      }
    };

    getCountries();
  }, []);

  return <ListOfCountries countries={countries} />
};

export default App
