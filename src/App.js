import React from 'react';
import Time from './component/clock';
import Logo from './component/logo';
import Map from './component/map';
// import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TabPanel = (props) => {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

const allyProps = (index) => {
  return {
    'id': `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value}
          onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Map" {...allyProps(0)} />
          <Tab label="Email" {...allyProps(1)} />
          <Tab label="Login" {...allyProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="App">
          <header className="App-header">
            <Time />
            <Logo />
            <Map />
          </header>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Email
      </TabPanel>
      <TabPanel value={value} index={2}>
        Login
      </TabPanel>
    </Box>
  );
};

export default App;
