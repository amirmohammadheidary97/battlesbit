import {ListItem, ListItemAvatar, Skeleton, styled} from '@mui/material';

const TransactionItemSkeleton = () => (
  <ListItem
    sx={{
      height: '4rem',
      '*': {
        fontFamily: 'Nunito Sans !important',
      },
    }}>
    {/* Avatar Skeleton */}
    <ListItemAvatar sx={{position: 'relative'}}>
      <Skeleton variant="circular" width={40} height={40} />
      <SubIconContainer>
        <Skeleton variant="circular" width={10} height={10} />
      </SubIconContainer>
    </ListItemAvatar>

    {/* Text Skeleton */}
    <div>
      <Skeleton variant="text" width={50} height="1.25rem" />
      <Skeleton variant="text" width={80} height="0.75rem" />
    </div>

    {/* Secondary Action Skeleton */}
    <div style={{marginLeft: 'auto'}}>
      <Skeleton variant="text" width={50} height="1rem" />
    </div>
  </ListItem>
);

export default TransactionItemSkeleton;

const SubIconContainer = styled('div')({
  position: 'absolute',
  left: '30px',
  bottom: '0',
  backgroundColor: '#fff',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
});
