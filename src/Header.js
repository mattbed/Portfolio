import './Header.css';
import React from 'react';
import Home from './Home';
import HomeAfterLoad from './HomeAfterLoad';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import LinkTab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Header() {
  
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const [counter, setCounter] = React.useState(true);
  const updateCounter = function() {
    setCounter(false);
  }
  window.onload = function() {
    setTimeout(updateCounter, 10000);
  };

  return (
    <Box sx={{ width: '96%', height: '96vh', margin: 'auto', bgcolor: '#187498'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#36AE7C'}}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="nav tabs example" 
          textColor="inherit" 
          centered
          >
          <LinkTab label="Home" sx={{'&:hover': {color: '#F9D923'}}} {...a11yProps(0)} />
          <LinkTab label="About" sx={{'&:hover': {color: '#F9D923'}}} {...a11yProps(1)} />
          <LinkTab label="Links & Contact" sx={{'&:hover': {color: '#F9D923'}}} {...a11yProps(2)} />
          <LinkTab label="Portfolio" sx={{'&:hover': {color: '#F9D923'}}} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      {(counter ? <Home /> : <HomeAfterLoad />)}
      {/* testing purposes */}
      {/* <HomeAfterLoad /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contact />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Portfolio />
      </TabPanel>
    </Box>
  );
}

export default Header;
