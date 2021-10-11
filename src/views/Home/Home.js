import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Hero,
  Experts,
  Partners,
} from './components';

import { integrations } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',    
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  shape: {
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Section className={classes.pagePaddingTop}>
          <Hero />
        </Section>
        <Section className={classes.pagePaddingTop}>
          <Experts />
        </Section>
      <Section>
        <Partners data={integrations} />
      </Section>
    </div>
  );
};

export default Home;
