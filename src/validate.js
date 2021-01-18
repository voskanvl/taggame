import { getCoors } from './getCoors';
export const validate = (target, dragged) => {
  const coorsTarget = getCoors(target);
  const coorsDragged = getCoors(dragged);
  const isRightTarget = !!target.dataset.empty;
  const isXRight = Math.abs(coorsTarget.x - coorsDragged.x) === 1;
  const isYRight = Math.abs(coorsTarget.y - coorsDragged.y) === 1;
  const isTooMatch =
    Math.abs(coorsTarget.x - coorsDragged.x) > 1 ||
    Math.abs(coorsTarget.y - coorsDragged.y) > 1;
  return (
    isRightTarget &&
    !isTooMatch &&
    ((isXRight && !isYRight) || (!isXRight && isYRight))
  );
};
