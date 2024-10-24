export const a11yProps = (index: number, name?: string) => ({
  id: `${name ? name : 'simple'}-tab-${index}`,
  'aria-controls': `${name ? name : 'simple'}-tabpanel-${index}`,
});
