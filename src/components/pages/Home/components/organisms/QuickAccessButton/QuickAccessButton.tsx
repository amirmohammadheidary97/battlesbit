import {useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid2';

import CustomButton from '@/components/atoms/Button';
import ButtonIconBox from '@/components/atoms/ButtonIconBox';
import type {TQuickAccessButton} from '@/components/pages/Home/utils/fakeData';

type Props = {
  buttonList: TQuickAccessButton[];
};

const QuickAccessButton = ({buttonList}: Props) => {
  const navigate = useNavigate();
  return (
    <Grid container size={12} display={'flex'} flexDirection={'column'}>
      <Grid
        container
        display={'flex'}
        justifyContent={'space-between'}
        size={12}>
        {buttonList.map(button => (
          <ButtonIconBox
            key={button.title}
            icon={button.icon}
            title={button.title}
            count={button.count}
          />
        ))}
      </Grid>
      <Grid
        mt={3}
        size={12}
        container
        rowSpacing={1}
        columnSpacing={{xs: 3, sm: 2, md: 3}}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Grid
          size={6}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}>
          <CustomButton
            backgroundColor="primary.main"
            content="Challenges"
            color="primary"
            fontSize="16px"
            fontWeight={500}
            variant="contained"
            textColor="#000"
            onClick={() => {
              navigate('/challenges');
            }}
            styleButton={{
              borderRadius: '12px',
              padding: '13px 20px',
              width: '100%',
            }}
          />
        </Grid>
        <Grid
          size={6}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          spacing={2}>
          <CustomButton
            backgroundColor="background.default"
            content="Demo game"
            color="primary"
            fontSize="16px"
            fontWeight={500}
            variant="contained"
            textColor="primary.main"
            onClick={() => {}}
            styleButton={{
              borderRadius: '12px',
              padding: '13px 20px',
              width: '100%',
              border: '1px solid #595959',
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuickAccessButton;
