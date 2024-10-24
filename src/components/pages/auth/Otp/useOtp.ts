import {useState} from 'react';
import type {SubmitHandler} from 'react-hook-form';
import {useController, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router';
import {toast} from 'react-toastify';

import {useOtpLoginState} from '../state/useOtpLogin.state';

import jwtManager from '@/config/jwt-manager';
import type {LoginWithEmailMutationVariables} from '@/gql-codegen/generated';
import {
  useLoginWithEmailMutation,
  useRequestEmailVerificationCodeMutation,
} from '@/gql-codegen/generated';
import {useAuthenticationStore} from '@/hooks/global-stores/authentication.store';

export const useOtp = () => {
  //
  const navigate = useNavigate();
  //
  const [countDownKey, setCountDownKey] = useState<number>(1);
  const [isCountDownCompleted, setIsCountDownCompleted] =
    useState<boolean>(false);
  const {setAccessToken, setRefreshToken, setExpireTime} =
    useAuthenticationStore();
  const {email} = useOtpLoginState();
  const [{fetching: isResendCodeLoading}, resendCode] =
    useRequestEmailVerificationCodeMutation();
  const [{fetching: isLoginWithOtpLoading}, login] =
    useLoginWithEmailMutation();
  const {control, handleSubmit} = useForm<LoginWithEmailMutationVariables>({
    disabled: isResendCodeLoading || isLoginWithOtpLoading,
  });
  //
  const {
    field: {onChange, value},
  } = useController({
    control,
    name: 'verificationCode',
    rules: {
      required: {
        value: true,
        message: 'this field is requiered',
      },
      minLength: {
        value: 5,
        message: 'otp code length must be 5 charachters',
      },
    },
  });
  const handleNavBack = () => navigate(-1);
  const onCountDownCompleted = () => setIsCountDownCompleted(true);
  const onSubmit: SubmitHandler<LoginWithEmailMutationVariables> = values =>
    login({
      ...values,
      email,
    }).then(resp => {
      if (!resp.error && resp.data) {
        setAccessToken(resp.data?.loginWithEmail.accessToken);
        setRefreshToken(resp.data?.loginWithEmail.refreshToken);
        setExpireTime(Date.now() + resp.data.loginWithEmail.expiresIn * 1000);
        jwtManager.init();
        navigate('/');
      } else if (resp.error) {
        toast.error(resp.error.message ?? 'login failed try again');
      }
    });
  const handleResendCode = () =>
    resendCode({email}).then(resp => {
      if (!resp.error) {
        toast.success('a verification has been sent to your email');
        setCountDownKey(n => n + 1);
      } else {
        toast.error(resp?.error?.message ?? 'a problem occured ! try again');
      }
    });
  //
  return {
    countDownKey,
    isCountDownCompleted,
    isResendCodeLoading,
    handleSubmit,
    onChange,
    value,
    handleNavBack,
    onCountDownCompleted,
    onSubmit,
    handleResendCode,
    isLoginWithOtpLoading,
  };
};
