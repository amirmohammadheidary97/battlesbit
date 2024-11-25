type Props = {
  img: string;
  dir: 'rtl' | 'ltr';
};

export const PlayerAvatar = ({img, dir}: Props) => (
  <svg
    preserveAspectRatio="none"
    className="player-avatar"
    viewBox="0 0 202 247"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    {dir === 'rtl' ? (
      <>
        <path
          d="M23.9672 6.51007C24.7824 2.85192 28.0279 0.25 31.7757 0.25H193.652C198.07 0.25 201.652 3.83172 201.652 8.25V238.25C201.652 242.668 198.07 246.25 193.652 246.25H25.3621H11.4828C6.22962 246.25 2.40217 241.273 3.75105 236.196L31.9182 130.177C33.2671 125.1 29.4396 120.123 24.1864 120.123H8.6304C3.51054 120.123 -0.291622 115.38 0.821897 110.383L23.9672 6.51007Z"
          fill="url(#pattern0_1854_1485)"
        />
        <defs>
          <pattern
            id="pattern0_1854_1485"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1">
            <use
              xlinkHref="#image0_1854_1485"
              transform="matrix(0.000788947 0 0 0.000651042 -0.105911 0)"
            />
          </pattern>
          <image
            id="image0_1854_1485"
            width="1536"
            height="1536"
            xlinkHref={img}
          />
        </defs>
      </>
    ) : (
      <>
        <path
          d="M178.298 239.742C177.482 243.399 174.237 246 170.49 246H8.34837C3.9301 246 0.348389 242.418 0.348389 238V8.00002C0.348389 3.58173 3.93011 0 8.34839 0H176.901H190.813C196.067 0 199.895 4.97929 198.544 10.0571L170.336 116.07C168.985 121.148 172.813 126.127 178.067 126.127H193.67C198.791 126.127 202.593 130.872 201.478 135.87L178.298 239.742Z"
          fill="url(#pattern0_1854_1476)"
        />
        <defs>
          <pattern
            id="pattern0_1854_1476"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1">
            <use
              xlinkHref="#image0_1854_1476"
              transform="matrix(0.000788947 0 0 0.000651042 -0.105911 0)"
            />
          </pattern>
          <image
            id="image0_1854_1476"
            width="1536"
            height="1536"
            xlinkHref={img}
          />
        </defs>
      </>
    )}
  </svg>
);
