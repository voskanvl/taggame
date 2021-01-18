export const changeItems = (target, dragged) => {
  //chage value
  const targetValue = target.textContent;
  target.textContent = dragged.textContent;
  dragged.textContent = targetValue;
  target.removeAttribute('data-empty');
  target.setAttribute('draggable', true);
  dragged.setAttribute('data-empty', true);
  dragged.setAttribute('draggable', false);
};
