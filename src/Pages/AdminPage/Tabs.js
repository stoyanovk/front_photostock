import React, { lazy, useState, Suspense } from "react";
import { useStyles } from "./style";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CategoryList from "./CategoryList";
import Spinner from "../../Components/Common/Spinner";
import UserList from "./UserList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'>
          <Tab label='Список категорий' {...a11yProps(0)} />
          <Tab label='Списка юзеров' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CategoryList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Suspense fallback={<Spinner />}>
          <UserList />
        </Suspense>
      </TabPanel>
    </div>
  );
}
