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
  consultantTitle:{
    marginTop: '18.75rem',
    marginBottom: '6.25rem',
  },
  consultant: {
    borderRadius: '30px',
    backgroundImage: 'linear-gradient(0deg, #ebf0ff 0%, #ffffff 100%)',
    border: '4px solid #ffffff',
    width: '100%',
    height: 'auto',
  },
  consultantimage:{
    lineHeight: '2.75rem',
    padding: '0 3.75em',
  },
  subline: {
    display: 'inline-block',
    lineHeight: '60px',
    marginBottom: '50px',
  },
  sectionstyle: {
    marginBottom: '400px',
  }
}));

const Consultants = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classes.sectionstyle}>
     <Grid
        container
        justify="space-between"
        className={classes.consultantTitle}
      >
      <Typography variant="h2">featured consultants.</Typography>
      </Grid>
      <Grid
        container
        justify="space-between"
      >
      <Carousel
      animation='slide'
      autoplay='0'
      indicators='false'
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
          justify="flex-start"
          alignItems="left"
          xs={12}
          md={3}
          lg={3}
        >
        <img src="../images/Jordan Pierce.png" className={classes.consultant}/>
        </Grid>
        <Grid
          item
          container
          className={classes.consultantimage}
          justify="flex-start"
          alignItems="left"
          xs={12}
          md={3}
          lg={3}
          xl={3}
        > 
        <Typography variant="h5" display="block">
          Jordan Pierce
        </Typography>

        <Typography variant="subtitle2" className={classes.subline}>
          Senior Software Developer
        </Typography>
        <Typography variant="subtitle1">
          Adobe Certifed Developer<br/>
          AWS Certified<br/>
          System Integration<br/>
        </Typography>
        <Typography variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex onsequat.
        </Typography>
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="left"
          xs={12}
          md={3}
          lg={3}
        >
        <img src="../images/vishal panchal.png" className={classes.consultant}/>
        </Grid>
        <Grid
          item
          container
          className={classes.consultantimage}
          justify="flex-start"
          alignItems="left"
          xs={12}
          md={3}
          lg={3}
        > 
        <Typography variant="h5" display="block">
          Vishal Panchal
        </Typography>

        <Typography variant="subtitle2" className={classes.subline}>
          Senior Software Developer
        </Typography>
        <Typography variant="subtitle1">
          Adobe Certifed Developer<br/>
          AWS Certified<br/>
          System Integration<br/>
        </Typography>
        <Typography variant="h6">
          We can help you transform an idea into a viable product by defining your business goals and building a roadmap to the best possible solution.
        </Typography>
        </Grid>
      </Grid>
            <Grid
        container
        justify="space-between"
      >      
        <Grid
          item
          container
          justify="flex-start"
          alignItems="left"
          xs={12}
          md={3}
          lg={3}
        >
        <img src="../images/stephen goudy.png" className={classes.consultant}/>
        </Grid>
        <Grid
          item
          container
          className={classes.consultantimage}
          justify="flex-start"
          alignItems="left"
          xs={12}
          md={3}
          lg={3}
        > 
        <Typography variant="h5" display="block">
          Stephen Goudy
        </Typography>

        <Typography variant="subtitle2" className={classes.subline}>
          Senior Software Developer
        </Typography>
        <Typography variant="subtitle1">
          Adobe Certifed Developer<br/>
          AWS Certified<br/>
          System Integration<br/>
        </Typography>
        <Typography variant="h6">
          We can help you transform an idea into a viable product by defining your business goals and building a roadmap to the best possible solution.
        </Typography>
        </Grid>
      </Grid>
    </Carousel>
    </Grid>
    </div>
  );
};

Consultants.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Consultants;
