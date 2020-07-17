import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Route, Link as RouterLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';

import { categories } from './views/articles';
import All from './views/All';
import Geo from './views/Geospatial';
import Algorithms from './views/Algorithms';
import Three from './views/Three';
import Math from './views/Math';


const routes = [
  { path: "/", component: All, label: "All" },
  { path: "/geospatial", component: Geo, label: categories.geospatial.label },
  { path: "/algorithms", component: Algorithms, label: categories.algorithms.label },
  { path: "/three", component: Three, label: categories.three.label },
  { path: "/math", component: Math, label: categories.math.label },
];


export default function AppRouter() {
  // Set selected tab based on hash route
  const currentPath = window.location.hash.slice(1);
  const [value, setValue] = React.useState(routes.findIndex(d => d.path === currentPath));

  const handleChange = (event, newValue) => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    setValue(newValue);
  };


  return (
    <Router>
      <AppBar position="fixed" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
        // aria-label="scrollable auto tabs example"
        >
          {routes.map((r, i) => (
            <Tab label={r.label} component={RouterLink} to={r.path} key={i} />
          ))}
        </Tabs>
      </AppBar>

      <MainContainer>
        {routes.map((r, i) => (
          <Route path={r.path} exact component={r.component} key={i} />
        ))}
      </MainContainer>
    </Router>
  );
};



const MainContainer = styled(Container).attrs(props => ({
  maxWidth: "lg"
}))`
  padding-top: 72px;
  background-color: #f8f8f8;
`;
