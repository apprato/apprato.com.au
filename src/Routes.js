import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home as HomeView,
  About as AboutView,
  Services as ServicesView,
  Team as TeamView,
  CaseStudies as CaseStudiesView,
  Contact as ContactView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={AboutView}
        exact
        layout={MinimalLayout}
        path="/about"
      />
      <RouteWithLayout
        component={ServicesView}
        exact
        layout={MinimalLayout}
        path="/services"
      />
      <RouteWithLayout
        component={TeamView}
        exact
        layout={MinimalLayout}
        path="/team"
      />
      <RouteWithLayout
        component={CaseStudiesView}
        exact
        layout={MinimalLayout}
        path="/case-studies"
      />
      <RouteWithLayout
        component={ContactView}
        exact
        layout={MinimalLayout}
        path="/contact"
      />
      <Redirect to="/not-found" status="404" />
    </Switch>
  );
};

export default Routes;
