import * as React from 'react';
// import styled from 'styled-components';
import styled from '@emotion/styled';

type ProfileImageProps = {
  src: string;
  alt: string;
  marginTop?: string;
  itemIndex: string | number;
};

const ProfileImage: React.FC<ProfileImageProps> = ({src, alt, itemIndex}) =>
  itemIndex == 1 ? (
    <StyledImage2 loading="lazy" src={src} alt={alt} />
  ) : (
    <StyledImage1 loading="lazy" src={src} alt={alt} />
  );

const StyledImage1 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 40px;
  border-radius: 100px;
`;

const StyledImage2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 40px;
  border-radius: 100px;
  margin-left: -20px;
  margin-top: 5px;
`;

export default ProfileImage;
