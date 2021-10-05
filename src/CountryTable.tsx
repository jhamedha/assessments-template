import React from "react";
import { useSortableData } from "./SortableData";
import { countryInfo } from "./typings";

export const CountryTable: React.FunctionComponent<any> = props => {
  const { countryData, requestSort, sortConfig } = useSortableData(props.countryData);
  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <table>
      <caption>Country Data</caption>
      <thead>
        <tr>
          <th>
            <button type="button"
                onClick={() => requestSort('name')}
                className={getClassNamesFor('name')}
                >
                Country
            </button>
          </th>
          <th>
            <button type="button"
                onClick={() => requestSort('capital')}
                className={getClassNamesFor('capital')}
                >
              Capital
            </button>
          </th>
          <th>
            <button type="button"
                onClick={() => requestSort('region')}
                className={getClassNamesFor('region')}
                >
              Region
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {countryData.map((country: countryInfo) => (
          <tr key={country.alpha2Code}>
            <td>{country.name}</td>
            <td>{country.capital}</td>
            <td>{country.region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
