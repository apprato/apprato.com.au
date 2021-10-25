import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  consultantTitle:{
    marginTop: '18.75rem',
    marginBottom: '6.25rem',
    [theme.breakpoints.down('lg')]: {
      marginTop: '8.75rem',
      marginBottom: '3.25rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '3.75rem',
      marginBottom: '1.25rem',
    },
  },
  consultant: {
    borderRadius: '30px',
    backgroundImage: 'linear-gradient(0deg, #ebf0ff 0%, #ffffff 100%)',
    border: '4px solid #ffffff',
    width: '100%',
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },    
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },    
  },
  consultantimage:{
    lineHeight: '2.75rem',
    padding: '0 3.75em',
    [theme.breakpoints.down('md')]: {
      lineHeight: '0.5rem',
      padding: '3em 1.5em',
    },
    [theme.breakpoints.between('md', 'lg') ]: {
      lineHeight: '0.5rem',
      padding: '0 1.5em',
    },    
    [theme.breakpoints.down('sm')]: {
      lineHeight: '0.5rem',
      padding: '1em 0.5em',
    },
  },
  subline: {
    display: 'inline-block',
    width: '100%',
    lineHeight: '60px',
    marginBottom: '50px',
    [theme.breakpoints.down('lg')]: {
      lineHeight: '40px',
      marginBottom: '15px',
    },    
  },
  imageroot:{
      display: 'block',
  },
  sectionstyle: {
    marginBottom: '400px',
    [theme.breakpoints.down('lg')]: {
      marginBottom: '100px',
    },    
    [theme.breakpoints.down('md')]: {
      marginBottom: '50px',
    },    
    [theme.breakpoints.down('sm')]: {
      marginBottom: '25px',
    },    
  },
}));

const Consultants = props => {
  const classes = useStyles();

  return (
    <div className={classes.sectionstyle} name="team">
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
      NextIcon={<img src="./images/right.png" width="20" alt=""/>}
      PrevIcon={<img src="./images/left.png" width="20" alt=""/>}
      className = 'consultantreel'
      animation = 'fade'
      autoPlay =  'false'
      stopAutoPlayOnHover = 'true'
      cycleNavigation = 'false'
      navButtonsAlwaysVisible= 'false'
      navButtonsProps={{
        style: {
            backgroundColor: 'transparent',
            borderRadius: 0
        }
      }}
      indicatorIconButtonProps={{
        style: {
            padding: '4px',
            color: '#fff'
        }
      }}
      activeIndicatorIconButtonProps={{
        style: {
            color: '#3377ff',
        }
      }}
      >
      <Grid
        container
        justify="space-between"
      >
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={2}
          lg={3}
          xl={3}
          className={classes.imageroot}
        >
        <img src="../images/Jordan Pierce.png" className={classes.consultant} alt="Jordan Pierce"/>
        </Grid>
        <Grid
          item
          container
          className={classes.consultantimage}
          justify="flex-start"
          xs={12}
          md={4}
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
          System Integration<br/><br/>
        </Typography>
        <Typography variant="h6">
          We can help you transform an idea into a viable product by defining your business goals and building a roadmap to the best possible solution.
        </Typography>
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={2}
          lg={3}
          xl={3}
          className={classes.imageroot}
        >
        <img src="../images/vishal panchal.png" className={classes.consultant} alt="Vishal Panchal"/>
        </Grid>
        <Grid
          item
          container
          className={classes.consultantimage}
          justify="flex-start"
          xs={12}
          md={4}
          lg={3}
          xl={3}
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
          System Integration<br/><br/>
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
          alignItems="center"
          xs={12}
          md={2}
          lg={3}
          xl={3}
          className={classes.imageroot}
        >
        <img src="../images/Jordan Pierce.png" className={classes.consultant} alt="Jordan Pierce"/>
        </Grid>
        <Grid
          item
          container
          className={classes.consultantimage}
          justify="flex-start"
          xs={12}
          md={4}
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
          System Integration<br/><br/>
        </Typography>
        <Typography variant="h6">
          We can help you transform an idea into a viable product by defining your business goals and building a roadmap to the best possible solution.
        </Typography>
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={2}
          lg={3}
          xl={3}
          className={classes.imageroot}
        >
        <img src="../images/vishal panchal.png" className={classes.consultant} alt="Vishal Panchal"/>
        </Grid>
        <Grid
          item
          container
          className={classes.consultantimage}
          justify="flex-start"
          xs={12}
          md={4}
          lg={3}
          xl={3}
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
          System Integration<br/><br/>
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
