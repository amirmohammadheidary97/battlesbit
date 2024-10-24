import type {SubmitHandler} from 'react-hook-form';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router';
import {toast} from 'react-toastify';

import {useOtpLoginState} from '../state/useOtpLogin.state';

import type {RequestEmailVerificationCodeMutationVariables} from '@/gql-codegen/generated';
import {useRequestEmailVerificationCodeMutation} from '@/gql-codegen/generated';

export const useLogin = () => {
  const navigate = useNavigate();
  const {setEmail} = useOtpLoginState();
  const [, executeMutation] = useRequestEmailVerificationCodeMutation();

  const {register, handleSubmit, getValues} =
    useForm<RequestEmailVerificationCodeMutationVariables>({});
  const onSubmit: SubmitHandler<
    RequestEmailVerificationCodeMutationVariables
  > = values => {
    executeMutation(values).then(resp => {
      if (resp?.error) {
        toast.error(resp?.error?.message ?? 'otp request failed', {
          position: 'top-right',
        });
      } else {
        setEmail(getValues('email'));
        navigate('/otp');
      }
    });
  };
  //
  return {register, handleSubmit, onSubmit};
};
