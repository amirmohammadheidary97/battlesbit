type TCustomPolygon = {
  width: number;
  height?: number;
  fill: string;
  position: 'toLeft' | 'toRight';
};

const CustomPolygon = ({
  width,
  height,
  fill = '#25272F',
  position,
}: TCustomPolygon) => (
  <>
    {position == 'toRight' ? (
      <svg
        width={width}
        height={height}
        viewBox="0 0 121 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M117.408 51.6461C120.976 47.1964 120.919 40.8501 117.272 36.4652L90.5384 4.32611C88.2585 1.58523 84.878 6.26585e-06 81.3128 6.14011e-06L12.0001 3.69552e-06C5.37265 3.46178e-06 7.27616e-05 5.37258 7.24026e-05 12L6.93146e-05 69C6.89556e-05 75.6274 5.37265 81 12.0001 81L88.1114 81C91.752 81 95.1958 79.3472 97.4733 76.507L117.408 51.6461Z"
          fill={fill}
        />
      </svg>
    ) : (
      <svg
        width={width}
        height={height}
        viewBox="0 0 121 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.5917 51.6461C0.0236772 47.1964 0.0806679 40.8501 3.72803 36.4652L30.4616 4.32611C32.7415 1.58523 36.122 6.26585e-06 39.6872 6.14011e-06L109 3.69552e-06C115.627 3.46178e-06 121 5.37258 121 12L121 69C121 75.6274 115.627 81 109 81L32.8886 81C29.248 81 25.8042 79.3472 23.5267 76.507L3.5917 51.6461Z"
          fill={fill}
        />
      </svg>
    )}
  </>
);

export default CustomPolygon;
