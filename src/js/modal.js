import { createElement, fetchData } from './utils.js';
const modalWindowElement = document.getElementById('modal');

const showModal = () => {
  modalWindowElement.classList.add('modal--show');
};
const createModalContent = countries => {
  const fragmentModal = document.createDocumentFragment();
  modalWindowElement.innerHTML = '';
  countries.forEach(country => {
    const backButton = createElement('button', 'button', ' BACK');
    const modalImage = createElement('img', 'modal__image', country.flags.svg);
    const modalInfo = createElement('div');
    const modalTitle = createElement('h2', 'bold', country.name.common);

    const modalList = createElement('div', 'modal__list');

    const modalListLeft = createElement('div');
    const modalName = createElement('p', 'bold', 'Native Name: ');
    const modalValueName = createElement(
      'span',
      'thin',
      Object.values(country.name.nativeName)[0].common
    );
    const modalPopulation = createElement('p', 'bold', 'Population: ');
    const modalValuePopulation = createElement(
      'span',
      'thin',
      country.population
    );
    const modalRegion = createElement('p', 'bold', 'Region: ');
    const modalValueRegion = createElement('span', 'thin', country.region);
    const modalSubRegion = createElement('p', 'bold', 'Sub Region: ');
    const modalValueSubRegion = createElement(
      'span',
      'thin',
      country.subregion
    );
    const modalCapital = createElement('p', 'bold', 'Capital: ');
    const modalValueCapital = createElement('span', 'thin', country.capital);
    const modalListRight = createElement('div');
    const modalDomain = createElement('p', 'bold', 'Top level Domain: ');
    const modalValueDomain = createElement('span', 'thin', country.tld[0]);
    const modalCurrencies = createElement('p', 'bold', 'Currencies: ');
    const modalValueCurrencies = createElement(
      'span',
      'thin',
      Object.values(country.currencies)[0].name
    );
    const modalLanguages = createElement('p', 'bold', 'Languages: ');
    let modalValueLanguages;
    Object.values(country.languages).forEach(language => {
      modalValueLanguages = createElement('span', 'thin', language + '. ');
      modalLanguages.append(modalValueLanguages);
      console.log(language);
    });
    const modalButtonsContainer = createElement('div', 'buttons-container');
    const modalButtonsValue = createElement(
      'span',
      'bold',
      'Border Countries: '
    );
    modalButtonsContainer.append(modalButtonsValue);
    let modalButtons;
    country.borders.forEach((border, index) => {
      modalButtons = createElement('button', 'button', country.borders[index]);
      modalButtonsContainer.append(modalButtons);
      console.log(country.borders[index]);
    });

    modalName.append(modalValueName);
    modalPopulation.append(modalValuePopulation);
    modalRegion.append(modalValueRegion);
    modalSubRegion.append(modalValueSubRegion);
    modalCapital.append(modalValueCapital);

    modalDomain.append(modalValueDomain);
    modalCurrencies.append(modalValueCurrencies);
    modalListLeft.append(
      modalName,
      modalPopulation,
      modalRegion,
      modalSubRegion,
      modalCapital
    );
    modalListRight.append(modalDomain, modalCurrencies, modalLanguages);
    modalList.append(modalListLeft, modalListRight);

    modalInfo.append(modalTitle, modalList, modalButtonsContainer);

    modalWindowElement.append(backButton, modalImage, modalInfo);
  });
  document.body.append(fragmentModal);
};

const allData = async country => {
  const data = await fetchData(
    'https://restcountries.com/v3.1/name/' + country
  );
  createModalContent(data);
  showModal();
};
export { showModal, createModalContent, allData };
