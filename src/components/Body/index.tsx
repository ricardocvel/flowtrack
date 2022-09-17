import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import { DeviceHub } from '@material-ui/icons';
import Dashboard from '../Dashboard';

interface TabMenuProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabMenu(props: TabMenuProps) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  //Function menu lateral
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={classes.tabsBody}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yPropsMenu(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


// sub menu 

interface TabSubMenuProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabSubMenu(props: TabSubMenuProps) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={useStyles().tabSubMenu}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yPropsSubMenu(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// style
const useStyles = makeStyles((theme: Theme) => ({
  body:{
      margin: 0,
      height: "100%",
      width: "100%",
  },
  root: {
      // backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: "100%",
      width: "100%",
  },
  tabs: {
      // flexGrow: 3,
      borderRight: `1px solid ${theme.palette.divider}`,
      height: "100%"
  },

  tabsBody: {
    width: "100%",
    alignItems: "start",
  },

  containerSubMenu: {
    width: "100%",
  },

  subMenu: {
    height: "100%"
  },

  tabSubMenu: {
    height: "100%",
    width: "100%",
  },

  subBody: {
    backgroundColor: theme.palette.divider,
  }
}));


export default function Body() {

  //Menu
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [SubMenuValue, setSubMenuValue] = React.useState(0);

  const MenuChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const SubMenuChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSubMenuValue(newValue);
  };

  //subMenu

  return (
    <div className={classes.body}>
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={MenuChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Torre 01" icon={<DeviceHub />} {...a11yPropsMenu(0)} />
                <Tab label="Torre 02" icon={<DeviceHub />} {...a11yPropsMenu(1)} />
                <Tab label="Torre 04" icon={<DeviceHub />} {...a11yPropsMenu(2)} />
            </Tabs>
            <TabMenu value={value} index={0}>
              {/* ----------menu dashboard------------- */}
                <div className={classes.containerSubMenu}>
                    <AppBar position="static" className={classes.subMenu} >
                      <Tabs 
                        value={SubMenuValue} 
                        onChange={SubMenuChange} 
                        aria-label="simple tabs example"
                        variant="fullWidth"
                      >
                        <Tab label="DashBoard" {...a11yPropsSubMenu(0)} />
                        <Tab label="Historico" {...a11yPropsSubMenu(1)} />
                        <Tab label="Ajuda" {...a11yPropsSubMenu(2)} />
                      </Tabs>
                    </AppBar>
                    <TabSubMenu value={SubMenuValue} index={0}>
                      <Dashboard/>
                    </TabSubMenu>
                    <TabSubMenu value={SubMenuValue} index={1}>
                      <div className={classes.subBody}></div>
                    </TabSubMenu>
                    <TabSubMenu value={SubMenuValue} index={2}>
                      Item Three
                    </TabSubMenu>
                </div>
            </TabMenu>
            <TabMenu value={value} index={1}>
                Item Two
            </TabMenu>
            <TabMenu value={value} index={2}>
                Item Three
            </TabMenu>
        </div>
    </div>
  );
}
