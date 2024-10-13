import React from 'react';
import styled from '@emotion/styled';

export type PriceInfoProps = {
  iconSrc: string;
  label: string;
  amount: number;
  currency: string;
};

export const PriceInfo: React.FC<PriceInfoProps> = ({
  iconSrc,
  label,
  amount,
  currency,
}) => (
  <PriceInfoWrapper>
    <Icon loading="lazy" src={iconSrc} alt={`${label} icon`} />
    <PriceText>
      <Label>{label}:</Label> <Amount>{amount}</Amount>{' '}
      <Currency>{currency}</Currency>
    </PriceText>
  </PriceInfoWrapper>
);

const PriceInfoWrapper = styled.div`
  display: flex;
  min-height: 25px;
  align-items: center;
  gap: 4px;
  justify-content: flex-start;
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  align-self: stretch;
  margin: auto 0;
`;

const PriceText = styled.div`
  align-self: stretch;
  margin: auto 0;
`;

const Label = styled.span`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.05px;
  color: rgba(243, 199, 59, 1);
`;

const Amount = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`;

const Currency = styled.span`
  font-weight: 700;
  font-size: 10px;
  line-height: 11px;
  text-transform: uppercase;
  color: rgba(109, 109, 109, 1);
`;
