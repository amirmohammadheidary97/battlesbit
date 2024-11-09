import {useState} from 'react';
import {QrCodeScannerRounded} from '@mui/icons-material';
import {Box, Button, CircularProgress, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import WarningTip from '../../atoms/warningTip';
import WaitForChargingWallet from '../../molecules/WaitForChargingWallet';
import FullPageDrawerContainer from '../../organism/DrawerContainer';

import QRCode from '@/assets/img/icons/general/qrCode.svg';
import {BackwardTitle} from '@/components/molecules/BackwardTitle';
import {theme} from '@/config/theme';
import {flex} from '@/utils/flexHelper';

type BitcoinGenerateLinkDrawerProps = {
  isOpen: boolean;
  handleCloseDrawer: () => void;
};
const BitcoinGenerateLinkDrawer = ({
  handleCloseDrawer,
  isOpen,
}: BitcoinGenerateLinkDrawerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedLink, setGeneratedLink] = useState<string>();
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleGenerateLink = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setGeneratedLink('FUNGFV8DQEyzzt6Hzx2kQ4kiXhtGjV7D85qZuRcHEnpg');
    }, 1000);
  };
  return (
    <FullPageDrawerContainer
      handleCloseDrawer={handleCloseDrawer}
      isOpen={isOpen}>
      <>
        <BackwardTitle title="Deposit Bitcoin" />
        <Grid container px={'1rem'} pt={'12px'}>
          <Grid size={12}>
            <Typography variant="body2" fontFamily={'Nunito Sans'}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              laborum odit ratione nemo repudiandae adipisci enim molestiae
              assumenda, nulla perspiciatis hic accusantium ipsum esse
              voluptatum commodi dicta. Ea, dignissimos.
            </Typography>
          </Grid>
          <Grid size={12}>
            <WarningTip>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              dignissimos error magni veritatis animi
            </WarningTip>
          </Grid>
          <Grid size={12}>
            <WarningTip>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              harum!
            </WarningTip>
          </Grid>
          {generatedLink && (
            <Grid size={12}>
              <Box
                sx={{
                  ...flex().jcenter().result,
                  py: '21px',
                  width: 1,
                  '>img': {
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                  },
                }}>
                <img src={QRCode} alt="qr-code" />
              </Box>
              <Box
                sx={{
                  width: 'calc(100% + 1rem)',
                  bgcolor: 'background.paper',
                  borderRadius: theme.shape.borderRadius,
                  ...flex().acenter().jcenter().result,
                  gap: '11px',
                  py: '1rem',
                  px: '0.5rem',
                  position: 'relative',
                  left: '-8px',
                }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Nunito Sans',
                    width: '85%',
                    wordBreak: 'break-word',
                    color: 'text.primary',
                  }}>
                  {generatedLink}
                </Typography>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedLink);
                    setIsCopied(true);
                  }}
                  disabled={isCopied}
                  sx={{py: '6px', borderRadius: theme.shape.borderRadius}}
                  variant="contained">
                  {isCopied ? 'copied' : 'copy'}
                </Button>
              </Box>
            </Grid>
          )}
          <Grid py={'24px'} sx={{...flex().jcenter().result}} size={12}>
            {!generatedLink ? (
              <Button
                endIcon={
                  isLoading ? (
                    <CircularProgress size={20} />
                  ) : (
                    <QrCodeScannerRounded />
                  )
                }
                variant="contained"
                disabled={isLoading}
                fullWidth
                onClick={handleGenerateLink}
                sx={{
                  py: '1rem',
                  borderRadius: theme.shape.borderRadius,
                  fontFamily: 'Nunito Sans',
                }}>
                generate deposit link
              </Button>
            ) : (
              <WaitForChargingWallet />
            )}
          </Grid>
        </Grid>
      </>
    </FullPageDrawerContainer>
  );
};

export default BitcoinGenerateLinkDrawer;
