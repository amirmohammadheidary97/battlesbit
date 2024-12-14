/* eslint-disable @typescript-eslint/no-unused-vars */
import {useForm} from 'react-hook-form';

type Inputs = {
  margin?: number;
  leverage?: number;
  tpsl: {
    tpTriggerPrice?: number;
    profit?: number;
    slTriggerPrice?: number;
    sl?: number;
  };
};

export const useOrderForm = () => {
  // eslint-disable-next-line no-empty-pattern
  const {} = useForm();
  return {};
};
