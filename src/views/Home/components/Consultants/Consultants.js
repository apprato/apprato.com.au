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
  consultant: {
    borderRadius: '30px',
    backgroundImage: 'linear-gradient(0deg, #ebf0ff 0%, #ffffff 100%)',
    border: '4px solid #ffffff',
    maxWidth: '100%',
  }
}));

const Consultants = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div>
     <Grid
        container
        justify="space-between"
        spacing={4}
      >
        <Typography variant="h3">featured consultants.</Typography>
    </Grid>
     <Grid
        container
        justify="space-between"
        spacing={4}
      >
      <Carousel
      animation='slide'
      autoplay='0'
      //NextIcon={<img src="http://random.com/next"/>}
      //PrevIcon={<img src="http://random.com/prev"/>}
      >
      <Grid
        container
        justify="space-between"
        spacing={4}
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

        <Typography variant="subtitle1">
          Senior Software Developer
        </Typography>
        <Typography variant="subtitle1">
          Adobe Certifed Developer<br/>
          AWS Certified<br/>
          System Integration<br/>
        </Typography>
        <Typography>
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
          justify="flex-start"
          alignItems="left"
          xs={12}
          md={3}
          lg={3}
        > 
        <Typography variant="h5" display="block">
          Vishal Panchal
        </Typography>

        <Typography variant="subtitle1">
          Senior Software Developer
        </Typography>
        <Typography variant="subtitle1">
          Adobe Certifed Developer<br/>
          AWS Certified<br/>
          System Integration<br/>
        </Typography>
        <Typography>
          We can help you transform an idea into a viable product by defining your business goals and building a roadmap to the best possible solution.
        </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-between"
        spacing={4}
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
          justify="flex-start"
          alignItems="left"
          xs={12}
          md={3}
          lg={3}
        > 
        <Typography variant="h5" display="block">
          Stephen Goudy
        </Typography>

        <Typography variant="subtitle1">
          Senior Software Developer
        </Typography>
        <Typography variant="subtitle1">
          Adobe Certifed Developer<br/>
          AWS Certified<br/>
          System Integration<br/>
        </Typography>
        <Typography  variant="body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex onsequat.
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
