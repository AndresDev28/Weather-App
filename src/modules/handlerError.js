// eslint-disable-next-line import/prefer-default-export
export function renderError(message) {
  const dataInfo = document.getElementById('dataInfo');
  dataInfo.textContent = message;
  dataInfo.style.color = 'red';
}
