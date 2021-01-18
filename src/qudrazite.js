export const qudrazite = () => {
  const app = document.querySelector('#app');
  const { height, width } = app.getBoundingClientRect();
  app.style.height = app.style.width = Math.min(height, width) + 'px';
};
