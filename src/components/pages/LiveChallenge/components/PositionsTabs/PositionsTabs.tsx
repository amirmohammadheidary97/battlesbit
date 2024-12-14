import {useState} from 'react';
import {Tab, Tabs, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {PositionItem} from '../PositionItem';
import {PositionsFakeData} from '../PositionItem/position-item.stories';

import {TabPanel} from '@/components/atoms/ TabPanel';
// import {a11yProps} from '@/utils/a11yProps';

const PositionsTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container size={12} spacing={2}>
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          width: '100%',
          '.MuiTab-root': {
            flexGrow: 1,
          },
        }}>
        <Tab label={<Typography variant="caption">Position</Typography>} />
        <Tab label={<Typography variant="caption">Open Order</Typography>} />
        <Tab label={<Typography variant="caption">History</Typography>} />
      </Tabs>
      {/* Panels */}
      <TabPanel value={value} index={0}>
        {PositionsFakeData.filter(p => p.type === 'position').map((p, i) => (
          <PositionItem key={p.assetName + i} {...(p as any)} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {PositionsFakeData.filter(p => p.type === 'openOrder').map((p, i) => (
          <PositionItem key={p.assetName + i} {...(p as any)} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {PositionsFakeData.filter(p => p.type === 'history').map((p, i) => (
          <PositionItem key={p.assetName + i} {...(p as any)} />
        ))}
      </TabPanel>
    </Grid>
  );
};

export default PositionsTabs;
