export type ChargeWalletItemType = {
  id: number;
  iconUrl: string;
  currency: string;
  currencyTwo: string;
  amount: number;
  amountTwo: number;
  funds: number;
};

export type LeverageItemType = {
  id: number;
  iconUrl: string;
  amount: number;
  currency: string;
  xpCuntent: string;
  xpValue: number;
  funds: number;
};

export type NewAvatarsType = {
  id: number;
  iconUrl: string;
  amount: number;
  currency: string;
  funds: number;
};

export type PackagesType = {
  id: number;
  img: string;
  title: string;
  leverage: string;
  character: string;
  amount: number;
  currency: string;
  status: string;
};
