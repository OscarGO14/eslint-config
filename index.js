import logger from './scripts';

const testEslint = 'testing eslint as formtter';

const paragraph = document.createElement('p');
paragraph.textContent = testEslint;
document.body.appendChild(paragraph);

const myFunction = (text, otherProp = 'no props') => {
  logger(text);
  logger(otherProp);
};
myFunction('hola');
