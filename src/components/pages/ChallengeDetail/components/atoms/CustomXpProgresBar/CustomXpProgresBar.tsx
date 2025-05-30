const pathD =
  'M9.82831 2.17157C10.5785 1.42143 11.5959 1 12.6567 1H132.343C133.404 1 134.421 1.42143 135.171 2.17157L143.171 10.1716C145.691 12.6914 143.907 17 140.343 17H4.65674C1.09312 17 -0.691554 12.6914 1.82831 10.1716L9.82831 2.17157Z';

const CustomXpProgresBar = ({children}: {children?: React.ReactNode}) => (
  <svg
    width="155px"
    height="17px"
    viewBox="0 0 145 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{display: 'block'}}>
    <defs>
      <clipPath id="progress-clip">
        <path d={pathD} />
      </clipPath>
    </defs>
    <path d={pathD} fill="#25272F" stroke="#595959" />
    <g clipPath="url(#progress-clip)">{children}</g>
  </svg>
);

export default CustomXpProgresBar;
