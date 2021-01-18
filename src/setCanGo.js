import { getCoors } from './getCoors.js';

export const setCanGo = (items, className, previous) => {
  console.log(previous);
  if (previous?.length) previous.forEach(e => e.classList.remove(className));
  const blank = document.querySelector("[data-empty='true']");
  const { x, y } = getCoors(blank);
  const canGo = {
    top: false,
    right: false,
    bottom: false,
    left: false,
  };
  const stepGo = {
    top: -4,
    right: 1,
    bottom: 4,
    left: -1,
  };
  /*
  кратные 4 - не имеют права,
  n % 4 == 1 - не имеют лева,
  с 13-16 - не имеют низа,
  с 1-4 не имеют верха
  */
  const empty = [...items].findIndex(e => e.dataset.empty) + 1;
  console.log(empty);
  if (empty > 4) Object.assign(canGo, { top: true });
  if (empty < 13) Object.assign(canGo, { bottom: true });
  if (empty % 4) Object.assign(canGo, { right: true });
  if (empty % 4 !== 1) Object.assign(canGo, { left: true });

  const result = [
    canGo.top && items[empty + stepGo.top - 1],
    canGo.right && items[empty + stepGo.right - 1],
    canGo.bottom && items[empty + stepGo.bottom - 1],
    canGo.left && items[empty + stepGo.left - 1],
  ].filter(e => e);
  result.forEach(e => e.classList.add(className));
  console.log('result', result);
  return result;
};
