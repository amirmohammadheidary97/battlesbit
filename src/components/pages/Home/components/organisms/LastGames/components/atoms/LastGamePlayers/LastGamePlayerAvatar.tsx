export const LastGamePlayerAvatar = ({
  dir,
  img,
}: {
  dir: 'rtl' | 'ltr';
  img: string;
}) => {
  if (dir === 'ltr') {
    return (
      <svg
        width="26"
        height="15"
        viewBox="0 0 26 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <path
          d="M23.5644 12.8946C22.9631 14.1793 21.6728 15 20.2543 15H7.50001C3.35787 15 3.72529e-07 11.6421 3.72529e-07 7.5V7.5C3.72529e-07 3.35786 3.35786 -3.57628e-07 7.5 -3.57628e-07H22.5789V-3.57628e-07C23.9728 -3.57628e-07 24.8527 1.49866 24.1734 2.71578L22.5635 5.60057C22.0408 6.53728 22.718 7.69068 23.7907 7.69068V7.69068C24.8195 7.69068 25.4996 8.75987 25.0635 9.69168L23.5644 12.8946Z"
          fill="url(#pattern0_3_4959)"
        />
        <defs>
          <pattern
            id="pattern0_3_4959"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1">
            <use
              xlinkHref="#image0_3_4959"
              transform="matrix(0.000651042 0 0 0.00112847 0 -0.366667)"
            />
          </pattern>
          <image
            id="image0_3_4959"
            width="1536"
            height="1536"
            xlinkHref={img}
          />
        </defs>
      </svg>
    );
  }
  return (
    <svg
      width="26"
      height="15"
      viewBox="0 0 26 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <path
        d="M2.43563 2.10543C3.03691 0.820742 4.32724 0 5.74568 0H18.5C22.6421 0 26 3.35786 26 7.5V7.5C26 11.6421 22.6421 15 18.5 15H3.42105V15C2.02724 15 1.14735 13.5013 1.82657 12.2842L3.43646 9.39943C3.95921 8.46272 3.28203 7.30932 2.20933 7.30932V7.30932C1.1805 7.30932 0.500423 6.24013 0.936548 5.30832L2.43563 2.10543Z"
        fill="url(#pattern0_3_4960)"
      />
      <defs>
        <pattern
          id="pattern0_3_4960"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <use
            xlinkHref="#image0_3_4960"
            transform="matrix(0.000651042 0 0 0.00112847 0 -0.366667)"
          />
        </pattern>
        <image id="image0_3_4960" width="1536" height="1536" xlinkHref={img} />
      </defs>
    </svg>
  );
};
