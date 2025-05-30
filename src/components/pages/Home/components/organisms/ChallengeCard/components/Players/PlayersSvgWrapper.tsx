export const PlayersSvgWrapper = ({
  dir,
  img,
}: {
  dir: 'left' | 'right';
  img: string;
}) => {
  if (dir === 'right')
    return (
      <svg
        width="65"
        height="42"
        viewBox="0 0 72 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <path
          d="M5.56593 4.5631C6.89201 1.77577 9.70334 0 12.79 0H64C68.4183 0 72 3.58172 72 8V34C72 38.4183 68.4183 42 64 42H7.73684C3.78556 42 1.30303 37.7376 3.25261 34.3008L7.73755 26.3945C9.23872 23.7481 7.32718 20.4661 4.28469 20.4661C1.36755 20.4661 -0.553259 17.4252 0.69998 14.791L5.56593 4.5631Z"
          fill="url(#pattern0_202_738)"
        />
        <defs>
          <pattern
            id="pattern0_202_738"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1">
            <use
              xlinkHref="#right-comp"
              transform="matrix(0.000976562 0 0 0.00172061 0.0387019 -0.176385)"
            />
          </pattern>
          <image id="right-comp" width="1024" height="1024" xlinkHref={img} />
        </defs>
      </svg>
    );
  return (
    <svg
      width="65"
      height="42"
      viewBox="0 0 72 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <path
        d="M66.4341 37.4369C65.108 40.2242 62.2967 42 59.21 42H7.99999C3.58172 42 0 38.4183 0 34V8C0 3.58172 3.58172 0 8 0H64.2632C68.2144 0 70.697 4.26236 68.7474 7.69919L64.2625 15.6055C62.7613 18.2519 64.6728 21.5339 67.7153 21.5339C70.6325 21.5339 72.5533 24.5748 71.3 27.209L66.4341 37.4369Z"
        fill="url(#pattern0_202_735)"
      />
      <defs>
        <pattern
          id="pattern0_202_735"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <use
            xlinkHref="#left-comp"
            transform="matrix(0.000976562 0 0 0.00172061 0.0387019 -0.176385)"
          />
        </pattern>
        <image id="left-comp" width="1024" height="1024" xlinkHref={img} />
      </defs>
    </svg>
  );
};
