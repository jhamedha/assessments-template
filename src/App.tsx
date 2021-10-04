import React, { useEffect, useState } from 'react';
import './styles.css';

type country = {
  name: string,
  topLevelDomain: string[],
  alpha2Code: string,
  alpha3Code: string,
  callingCodes: string[],
  capital: string,
  altSpellings: string[],
  region: string
}

const ProductTable: React.FunctionComponent<any> = props => {
  return (
    <table>
      <caption>Country Data</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Capital</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        {props.countryData.map((prop: country) => (
          <tr key={prop.alpha2Code}>
            <td>{prop.name}</td>
            <td>{prop.capital}</td>
            <td>{prop.region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


function App() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchCountryData = async() => {
      await fetch('http://api.countrylayer.com/v2/all?access_key=xx')
        .then(results => results.json())
        .then(data => {
          setCountryData(data);
        });
    }
    fetchCountryData();
  }, []);

  return (
    <ProductTable
        countryData = {countryData}
      />
  );
}

export default App;
