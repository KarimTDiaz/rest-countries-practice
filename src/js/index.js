// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createCountryCard } from './countries-board';

const formElement = document.getElementById('form');
const countryElement = document.getElementById('countries');

formElement.addEventListener('submit', ev => {
  ev.preventDefault();
  createCountryCard(ev.target.country.value);
});
countryElement.addEventListener('click', ev => {});
