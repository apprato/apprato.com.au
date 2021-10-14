import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader, CountUpNumber } from 'components/molecules';
import Carousel from 'react-material-ui-carousel';
import { Grid, Typography, Paper, Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  placementGrid: {
    display: 'flex',
  },
  placementGridItemMiddle: {
    margin: `0 ${theme.spacing(3)}px`,
  },
  coverImage: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
  imageleft: {
    backgroundImage: `url(${"../images/Aquila_Image.jpg"})`,
    minHeight: '23.35vw',
    backgroundSize: 'cover',
    backgroundPosition: '-179px -116px',
    backgroundRepeat: 'no-repeat',
    width: `calc(100vw + 48px)`,
  },
  whitebg: {
    background: '#fff',
    padding: '6.25em',
  },
  headingh2:{
    marginBottom: '180px',
  },
  title:{
    marginBottom: '120px',
  }
}));

const Carouselview = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div>
     <Grid
        className={classes.title}
        container
        xs={12}
        md={6}
        lg={6}
      >
        <Typography variant="h5">Delivering accelerated outcomes by working in accountable partnership.</Typography>
    </Grid>
   <Grid
        container
      >
      <Carousel
      animation='slide'
      //NextIcon={<img src="http://random.com/next"/>}
      //PrevIcon={<img src="http://random.com/prev"/>}
      >
      <Grid
        container
        justify="space-between"
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          lg={6}
        >
        <div className={classes.imageleft}></div>
        </Grid>
        <Grid
          item
          container
          className={classes.whitebg}
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          lg={6}
        > 
        <Typography variant="h2" display="block" className={classes.headingh2}>
          Aquila
        </Typography>
        <Typography variant="h4" display="block">
          Supporting  Aquilas growth
        </Typography>

        <Typography variant="body1">
          Development
        </Typography>
        <Typography variant="subtitle1">
          As part of the brand expansion, Apprato worked with Aquila to increase their digital reach and support their growing eCommerce requirements . We integrated Emarsys Omnichannel Customer Engagement Platform to allow Aquila to export data feeds and develop mail lists and record sales metric engagements with front-end engagement trackers. We updated the payment gateway to Braintree with Kount for AI Driven Fraud Protection. And implemented an Advanced Look Book Engine to show case seasonal fashion apparel.
        </Typography>
        </Grid>
      </Grid>      
    </Carousel>
    </Grid>
    </div>
  );
};

Carouselview.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Carouselview;
