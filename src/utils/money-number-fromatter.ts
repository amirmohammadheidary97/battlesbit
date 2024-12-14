// export const numberWithCommas = (x: number) =>
//   (Number.isInteger(x) ? x + '.00' : String(x)).replace(
//     /\B(?=(\d{3})+(?!\d))/g,
//     ',',
//   );
export const numberWithCommas = (x: number, precision: number = 2) =>
  x.toFixed(precision).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
