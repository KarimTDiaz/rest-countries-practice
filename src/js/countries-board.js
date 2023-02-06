import { fetchData, createElement } from './utils.js';
const countriesContainerElement = document.getElementById('countries');

const createCountryCard = countries => {
  const fragment = document.createDocumentFragment();
  countriesContainerElement.innerHTML = '';
  countries.forEach(country => {
    const countryItem = createElement(
      'div',
      'countries__item',
      '',
      country.name.common.toLowerCase()
    );
    const countryFlag = createElement(
      'img',
      'countries__image',
      country.flags.svg
    );
    const countryInfo = createElement('div', 'countries__info');
    const countryName = createElement('h2', 'bold', country.name.common);
    const countryBoldPopulation = createElement('p', 'bold', 'Population: ');
    const countryPopulation = createElement('span', 'thin', country.population);
    const countryBoldRegion = createElement('p', 'bold', 'Region: ');
    const countryRegion = createElement('span', 'thin', country.region);
    const countryBoldCapital = createElement('p', 'bold', 'Capital: ');
    const countryCapital = createElement('span', 'thin', country.capital);

    countryBoldPopulation.append(countryPopulation);
    countryBoldRegion.append(countryRegion);
    countryBoldCapital.append(countryCapital);

    countryInfo.append(
      countryName,
      countryBoldPopulation,
      countryBoldRegion,
      countryBoldCapital
    );

    countryItem.append(countryFlag, countryInfo);
    fragment.append(countryItem);
  });

  countriesContainerElement.append(fragment);
};

const allRegionsData = async region => {
  const data = await fetchData(
    'https://restcountries.com/v3.1/region/' + region
  );
  createCountryCard(data);
};

const singleCountryData = async country => {
  const data = await fetchData(
    'https://restcountries.com/v3.1/name/' + country + '?fullText=true'
  );
  createCountryCard(data);
};

const allCountries = async countries => {
  const data = await fetchData('https://restcountries.com/v3.1/all');
  createCountryCard(data);
};

export { singleCountryData, allRegionsData, allCountries };
