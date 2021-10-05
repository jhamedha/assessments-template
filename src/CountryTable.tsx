import React, { useState } from "react";
import { countryInfo } from "./typings";
import { useSortableData } from "./SortableData";

export const CountryTable: React.FunctionComponent<any> = props => {
    const { countryData, requestSort, sortConfig } = useSortableData(props.countryData);
    const [filteredCountries, setFilteredCountries] = useState<countryInfo[]>([]);
    const [searchValue, setSearchValue] = useState("");

    const search = (searchTerm: string) => {
        setSearchValue(searchTerm);
        const filtered = countryData.filter((country) =>
            country.name.toLowerCase().includes(searchTerm)
        );
        setFilteredCountries(filtered);
    }

    const getClassNamesFor = (name: string) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <div>
            <input onChange={(e) => search(e.target.value)} type="text" placeholder="Enter country name to filter"></input>
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
                    {searchValue ?
                        filteredCountries.map((country: countryInfo) => (
                            <tr key={country.alpha2Code}>
                                <td>{country.name}</td>
                                <td>{country.capital}</td>
                                <td>{country.region}</td>
                            </tr>))
                        :
                        countryData.map((country: countryInfo) => (
                            <tr key={country.alpha2Code}>
                                <td>{country.name}</td>
                                <td>{country.capital}</td>
                                <td>{country.region}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};
