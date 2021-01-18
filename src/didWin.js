export const didWin = items => {
  items = [...items];
  const last = items.pop();
  return !!last.dataset.empty && items.every((e, i) => e.textContent == i + 1);
};
