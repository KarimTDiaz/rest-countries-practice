// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import {
  singleCountryData,
  allRegionsData,
  allCountries
} from './countries-board';
import { switchTheme } from './switch-theme.js';
import { showModal, allData } from './modal.js';

const formElement = document.getElementById('form');
const regionElement = document.getElementById('region');
const countryElement = document.getElementById('countries');
const themeElement = document.getElementById('switch-theme');
allCountries();

formElement.addEventListener('submit', ev => {
  ev.preventDefault();
  singleCountryData(ev.target.country.value);
});

regionElement.addEventListener('change', ev => {
  allRegionsData(ev.target.value);
});

themeElement.addEventListener('click', ev => {
  switchTheme();
});

countryElement.addEventListener('click', ev => {
  allData(ev.target.dataset.country);
});
