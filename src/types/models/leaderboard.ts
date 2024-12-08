export type UserItemType = {
  id: number;
  avatar: string;
  level: number;
  userName: string;
  amount: number;
  currency: string;
};

export type TopPlayer = {
  numberOne: UserItemType;
  numberTwo: UserItemType;
  numberThree: UserItemType;
};
