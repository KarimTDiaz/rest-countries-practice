import { createElement, fetchData } from './utils.js';
const modalWindowElement = document.getElementById('modal');
/* modalimage = document.getElementById('image'); */

const showModal = () => {};
const createModalContent = countries => {
  const fragmentModal = document.createDocumentFragment();
  /* modalWindowElement.innerHTML = ''; */
  countries.forEach(country => {
    const backButton = createElement('button', 'button', ' BACK');
    const modalImage = createElement(
      'img',
      'countries__image',
      country.flags.svg
    );
    const modalInfo = createElement('div', 'modal__info');
    const modalTitle = createElement('h2', 'bold', country.name.common);
    const modal__list = createElement('div', 'modal__list');
    const modalBoldName = createElement('p', 'bold', 'Native Name: ');
    const modalName = createElement(
      'span',
      'thin',
      Object.values(country.name.nativeName)[0]
    );

    console.log(Object.values(country.name.nativeName));
    modalBoldName.append(modalName);
    modalInfo.append(modalTitle, modal__list);
    modalWindowElement.append(backButton, modalImage, modalInfo);
  });
  document.body.append(fragmentModal);
};

const allData = async country => {
  const data = await fetchData(
    'https://restcountries.com/v3.1/name/' + country
  );
  createModalContent(data);
};
export { showModal, createModalContent, allData };
