import {useMemo} from 'react';
import Countdown from 'react-countdown';
import OTPInput from 'react-otp-input';
import {Link} from 'react-router-dom';
import {
  Box,
  Button,
  CircularProgress,
  FilledInput,
  Typography,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {useOtp} from './useOtp';

import bg from '@/assets/img/bg/otp-bg.svg';
import {Center} from '@/components/atoms/Center';
import {flex} from '@/utils/flexHelper';

const Otp = () => {
  //
  const theme = useTheme();
  const {
    countDownKey,
    handleResendCode,
    handleSubmit,
    isCountDownCompleted,
    onChange,
    onCountDownCompleted,
    onSubmit,
    value,
    isResendCodeLoading,
    isLoginWithOtpLoading,
  } = useOtp();
  //
  return (
    <Grid
      container
      size={12}
      spacing={0}
      sx={{height: '100vh', backgroundColor: theme.palette.background.default}}>
      <Grid
        size={12}
        sx={{
          overflow: 'hidden',
          height: '45vh',
          img: {
            width: '100%',
          },
        }}>
        <Center fullSize>
          <img src={bg} />
        </Center>
      </Grid>
      <Grid
        size={12}
        p={2}
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
        spacing={3}>
        {/* OTP */}
        <Grid container size={12} spacing={1}>
          <Box sx={{...flex().column().astretch().gap(2).result, width: 1}}>
            <Grid size={12} dir="ltr">
              <OTPInput
                value={value}
                onChange={onChange}
                numInputs={5}
                containerStyle={{
                  direction: 'ltr',
                  backgroundColor: theme.palette.background.paper,
                  padding: theme.spacing(2),
                  borderRadius: '0.75rem',
                  gap: '0.25rem',
                  justifyContent: 'center',
                }}
                renderSeparator={<Box component={'span'} sx={{mx: 0.5}} />}
                renderInput={props => (
                  <FilledInput
                    sx={{
                      maxWidth: 70,
                      backgroundColor: theme.palette.background.default,
                      flexGrow: 1,
                      borderRadius: '0.75rem',
                      aspectRatio: '1/1',
                      input: {
                        padding: 1,
                        textAlign: 'center',
                      },
                    }}
                    {...props}
                    type="number"
                  />
                )}
              />
            </Grid>
            <Grid size={12} container justifyContent={'space-between'}>
              <Grid>
                <Link
                  style={{
                    textDecoration: 'none',
                    borderBottom: `1px solid ${
                      !isCountDownCompleted || isResendCodeLoading
                        ? theme.palette.text.disabled
                        : theme.palette.primary.main
                    }`,
                  }}
                  to={
                    !isCountDownCompleted || isResendCodeLoading ? '' : '/login'
                  }>
                  <Typography
                    variant="caption"
                    color={
                      !isCountDownCompleted || isResendCodeLoading
                        ? theme.palette.text.disabled
                        : 'primary.main'
                    }>
                    Change email
                  </Typography>
                </Link>
              </Grid>
              <Grid>
                {isResendCodeLoading && (
                  <CircularProgress
                    color="primary"
                    size={10}
                    sx={{
                      marginInlineEnd: 1,
                    }}
                  />
                )}
                <Typography
                  variant="caption"
                  sx={{
                    cursor: 'pointer',
                  }}
                  color={
                    !isCountDownCompleted
                      ? theme.palette.text.secondary
                      : theme.palette.text.primary
                  }
                  onClick={() => {
                    if (!isCountDownCompleted || isResendCodeLoading) return;
                    else handleResendCode();
                  }}>
                  {!isCountDownCompleted && 'Resend in '}
                  {useMemo(
                    () => (
                      <Countdown
                        key={countDownKey}
                        date={Date.now() + 1000 * 120}
                        renderer={({minutes, seconds}) => (
                          <>
                            {minutes === 0 && seconds === 0 ? (
                              'Resend'
                            ) : (
                              <>
                                {minutes}:{seconds}
                              </>
                            )}
                          </>
                        )}
                        onComplete={onCountDownCompleted}
                      />
                    ),
                    [countDownKey],
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/* Submit */}
        <Grid size={12} mt={3}>
          <Button
            fullWidth
            disabled={isCountDownCompleted || value?.length < 5 || !value}
            type="submit"
            variant="contained"
            sx={{
              fontWeight: 'bold',
              py: 1.5,
              borderRadius: theme.shape.borderRadius,
            }}>
            {isLoginWithOtpLoading && (
              <CircularProgress
                color="primary"
                size={20}
                sx={{
                  marginInlineEnd: 2,
                }}
              />
            )}
            Enter
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Otp;
