export interface countryInfo extends IObjectKeys {
    name: string,
    topLevelDomain: string[],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: string[],
    capital: string,
    altSpellings: string[],
    region: string
}

interface IObjectKeys {
    [key: string]: string | string [];
}

export interface sort {
    key: string;
    direction: string;
}
