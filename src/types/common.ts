export type positionSideType = 'sell' | 'buy';

export type money = {
  amount: number;
  unit: string;
};

export type orderType = 'market' | 'limit' | 'stoplimit';
export type marginType = 'isolate' | 'cross';
