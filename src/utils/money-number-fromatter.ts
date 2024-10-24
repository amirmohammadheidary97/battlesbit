export const numberWithCommas = (x: number) =>
  (Number.isInteger(x) ? x + '.00' : String(x)).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ',',
  );
