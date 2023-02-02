import { fetchData } from './utils.js';
const countriesContainerElement = document.getElementById('countries');

const createCountryCard = async country => {
  const data = await fetchData(
    'https://restcountries.com/v3.1/name/' + country
  );
  const fragment = document.createDocumentFragment();
  const countryItem = document.createElement('div');
  const countryFlag = document.createElement('img');
  const countryInfo = document.createElement('div');
  const countryName = document.createElement('h2');
  const countryPopulation = document.createElement('p');
  const countryRegion = document.createElement('p');
  const countryCapital = document.createElement('p');
  countryItem.append(countryFlag, countryInfo);
  countryInfo.append(
    countryName,
    countryPopulation,
    countryRegion,
    countryCapital
  );
  countryFlag.src = data[0].flags.svg;
  countryName.textContent = data[0].name.common;

  console.log(data[0].name);

  fragment.append(countryItem);
  countriesContainerElement.append(fragment);
};

export { createCountryCard };
