type TabPanelProps = {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
  name?: string;
};

export const TabPanel = ({
  children,
  value,
  index,
  name,
  ...other
}: TabPanelProps) => (
  <div
    role="tabpanel"
    className="tabpanel"
    hidden={value !== index}
    id={`${name ? name : 'simple'}-tabpanel-${index}`}
    aria-labelledby={`${name ? name : 'simple'}-tab-${index}`}
    style={{
      display: value !== index ? 'none' : 'inherit',
    }}
    {...other}>
    {value === index && children}
  </div>
);
