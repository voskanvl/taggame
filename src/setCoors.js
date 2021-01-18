export const setCoors = (el, idx) => {
  if (typeof idx === 'number') {
    el.setAttribute('data-coors-x', (idx % 4) + 1);
    el.setAttribute('data-coors-y', Math.floor(idx / 4) + 1);
  }
  if (typeof idx === 'object' && idx.x && idx.y) {
    el.setAttribute('data-coors-x', idx.x);
    el.setAttribute('data-coors-y', idx.y);
  }
};
