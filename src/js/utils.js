const fetchData = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const createElement = (element, className, typeContent, dataset) => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  newElement.dataset.country = dataset;
  if (element !== 'img') {
    newElement.textContent = typeContent;
  } else {
    newElement.src = typeContent;
  }
  return newElement;
};

export { fetchData, createElement };
