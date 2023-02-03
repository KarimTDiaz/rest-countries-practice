// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { singleCountryData, allRegionsData } from './countries-board';
import { switchTheme } from './switch-theme.js';
import { showModal, allData } from './modal.js';

const formElement = document.getElementById('form');
const regionElement = document.getElementById('region');
const countryElement = document.getElementById('countries');
const themeElement = document.getElementById('switch-theme');

formElement.addEventListener('submit', ev => {
  ev.preventDefault();
  singleCountryData(ev.target.country.value);
  console.log(ev.target.country.value);
});

regionElement.addEventListener('change', ev => {
  allRegionsData(ev.target.value);
});

themeElement.addEventListener('click', ev => {
  switchTheme();
});

countryElement.addEventListener('click', ev => {
  showModal();
  allData(ev.target.dataset.country);
  console.log(ev.target.dataset.country);
});
