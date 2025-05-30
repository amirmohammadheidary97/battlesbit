import GeogrotesqueWideBold from '@/assets/font/GeogrotesqueWide/GeogrotesqueWide-Bd.ttf';
import GeogrotesqueWideBoldItalic from '@/assets/font/GeogrotesqueWide/GeogrotesqueWide-BdIt.ttf';
import GeogrotesqueWideLight from '@/assets/font/GeogrotesqueWide/GeogrotesqueWide-Lt.ttf';
import GeogrotesqueWideLightItalic from '@/assets/font/GeogrotesqueWide/GeogrotesqueWide-LtIt.ttf';
import GeogrotesqueWideMedium from '@/assets/font/GeogrotesqueWide/GeogrotesqueWide-Md.ttf';
import GeogrotesqueWideMediumItalic from '@/assets/font/GeogrotesqueWide/GeogrotesqueWide-MdIt.ttf';
import GeogrotesqueWideRegular from '@/assets/font/GeogrotesqueWide/GeogrotesqueWide-Rg.ttf';
import GeogrotesqueWideItalic from '@/assets/font/GeogrotesqueWide/GeogrotesqueWide-RgIt.ttf';
import GeogrotesqueWideSemiBold from '@/assets/font/GeogrotesqueWide/GeogrotesqueWide-SmBd.ttf';
import GeogrotesqueWideSemiBoldItalic from '@/assets/font/GeogrotesqueWide/GeogrotesqueWide-SmBdIt.ttf';
import GeogrotesqueWideThin from '@/assets/font/GeogrotesqueWide/GeogrotesqueWide-Th.ttf';
import GeogrotesqueWideThinItalic from '@/assets/font/GeogrotesqueWide/GeogrotesqueWide-ThIt.ttf';
import GeogrotesqueWideUltraLight from '@/assets/font/GeogrotesqueWide/GeogrotesqueWide-UltLt.ttf';
import GeogrotesqueWideUltraLightItalic from '@/assets/font/GeogrotesqueWide/GeogrotesqueWide-UltLtIt.ttf';

const fontFaces = `
  @font-face {
    font-family: 'Geogrotesque Wide';
    src: url(${GeogrotesqueWideThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Geogrotesque Wide';
    src: url(${GeogrotesqueWideThinItalic}) format('truetype');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Geogrotesque Wide';
    src: url(${GeogrotesqueWideUltraLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Geogrotesque Wide';
    src: url(${GeogrotesqueWideUltraLightItalic}) format('truetype');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'Geogrotesque Wide';
    src: url(${GeogrotesqueWideLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Geogrotesque Wide';
    src: url(${GeogrotesqueWideLightItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Geogrotesque Wide';
    src: url(${GeogrotesqueWideRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Geogrotesque Wide';
    src: url(${GeogrotesqueWideItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Geogrotesque Wide';
    src: url(${GeogrotesqueWideMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Geogrotesque Wide';
    src: url(${GeogrotesqueWideMediumItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Geogrotesque Wide Semi';
    src: url(${GeogrotesqueWideSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Geogrotesque Wide Semi';
    src: url(${GeogrotesqueWideSemiBoldItalic}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Geogrotesque Wide';
    src: url(${GeogrotesqueWideBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Geogrotesque Wide';
    src: url(${GeogrotesqueWideBoldItalic}) format('truetype');
    font-weight: 700;
    font-style: italic;
  }
`;

export default fontFaces;
