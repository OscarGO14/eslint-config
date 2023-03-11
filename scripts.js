/* eslint-disable no-console */
export const logger = (message) => {
  console.log(
    `%c${message}`,
    'color: #00ff00; font-size: 20px; font-weight: bold;',
  );
};
export const loggerError = (message) => {
  console.log(
    `%c${message}`,
    'color: #ff0000; font-size: 20px; font-weight: bold;',
  );
};
