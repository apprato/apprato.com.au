import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { LearnMoreLink, Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    "& main":{
        color: 'pink',
    }
  },
  heading: {
    paddingRight: '5em',
    "& h6": {
      margin: '1.5em 0',
    }
  },
  subtitleWrapper: {

  },
  image: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: '80%',
      paddingLeft: '4rem',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '576px',
    },
  },
  reversemob:{
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
  }
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        className={classes.reversemob}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
          className={classes.heading}
        >
          <SectionHeader
            title={
              <div>
                eCommerce and digital transformation specialists.
              </div>
            }
            subtitle="We leverage the power of partnerships, experience design and bespoke software development to drive digital transformation, eCommerce and product engineering initiatives."
            ctaGroup={[
              <LearnMoreLink
                title="Learn how"
                href="#"
                variant="h6"
              />,
            ]}
            align="left"
            disableGutter
            titleVariant="h2"
          />
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="/images/Layer_1.png"
            alt=""
            className={classes.image}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
