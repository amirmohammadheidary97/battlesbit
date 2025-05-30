import {Box, Skeleton} from '@mui/material';

export const BackwardTitleTemplate = ({
  isFixedBackWard,
  isShowHrefBtn = true,
}: {
  isFixedBackWard?: boolean;
  isShowHrefBtn?: boolean;
}) => (
  <>
    <Box
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      position={isFixedBackWard ? 'absolute' : 'relative'}
      px={3}
      pt={1}
      width={1}
      height={'54px'}
      zIndex={isFixedBackWard ? 10 : 1}>
      <Box
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'start'}>
        <Skeleton variant="rectangular" width={16} height={26} />
        <Skeleton
          variant="text"
          width={100}
          height={28}
          sx={{marginInlineStart: 2}}
        />
      </Box>
      {isShowHrefBtn && (
        <Box>
          <Skeleton variant="text" width={46} height={46} />
        </Box>
      )}
    </Box>
  </>
);
