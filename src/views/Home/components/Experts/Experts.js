import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { LearnMoreLink, Image } from 'components/atoms';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {},
  image:{
    width: '17.4em',
    margin: '0 3em',
  },
  imagefirst:{
    width: '17.4em',
    margin: '0 3em 0 0',
  },
  imagelast:{
    width: '17.4em',
    margin: '0 0 0 3em',
  },
  expertbox: {
    filter: 'drop-shadow(0px 20px 35px rgba(13,68,255,0.2))',
    borderRadius: theme.spacing(2),
    background: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
    padding: '4.375em 6.25rem',
    margin: '9.375em auto',
    width: '100%',
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Experts = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const flexContainer = {
    padding: 0,
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={0}
        className={classes.expertbox}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={5}
          data-aos={'fade-up'}
        >
        <Typography variant="h3">
          certified experts.
        </Typography>

        <List style={flexContainer}>
          <ListItem>Adobe Certified Expert Commerce Developer</ListItem>
          <ListItem>Magento2 Certified Cloud Developer</ListItem>
          <ListItem>AWS Certified Cloud Practitioner</ListItem>
          <ListItem>Prince2 Foundation Certified Developer</ListItem>
        </List>

        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={7}
          data-aos={'fade-up'}
        >
          <Image
            src="/images/Layer_125.png"
            alt=""
            className={classes.imagefirst}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          <Image
            src="/images/Layer_129.png"
            alt=""
            className={classes.image}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          <Image
            src="/images/Layer_123.png"
            alt=""
            className={classes.image}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          <Image
            src="/images/Layer_128.png"
            alt=""
            className={classes.imagelast}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
      </Grid>
    </div>
  );
};

Experts.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Experts;
