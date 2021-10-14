import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader, CountUpNumber } from 'components/molecules';
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
    minHeight: '862px',
    backgroundSize: 'cover',
    backgroundPosition: '-179px -116px',
    backgroundRepeat: 'no-repeat',
    width: `calc(100vw + 48px)`,
  },
  myimg: {
      margin: '6.25em 0',
  },
  mydesc: {
    marginRight: '10.125em',
    "& h4": {
      marginBottom: '40px',
    }
  },
  mytext: {
    margin:'1em 0 6.25rem', maxWidth: '1800px', display:'block',
  }
}));

const Readysetcode = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        justify="space-between"
      >
        <Typography variant="h2">ready. set. code.</Typography>
        <Typography variant="h5" className={classes.mytext}>
          As specialists in custom design and engineering of leading technology, our offering consists of complete end-to-end service that creates value, builds relationships and helps your business thrive in our digital world.
        </Typography>
      </Grid>
      <Grid
        container
        justify="space-between"
      >
       <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={4}
          lg={4}
        >
            <img src="../images/agile.png" className={classes.myimg}/>
            <div className={classes.mydesc} spacing={10}>
            <Typography variant="h4">
              agile
            </Typography>
            <Typography variant="h6">
              We can handle your entire project from start to finish, or collaborate with your team on a continuous engagement.
            </Typography>
            </div>
        </Grid>
         <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={4}
          lg={4}
        >
            <img src="../images/inspiring.png" className={classes.myimg}/>
            <div className={classes.mydesc}>
            <Typography variant="h4">
              inspiring
            </Typography>
            <Typography variant="h6">
              We can help you transform an idea into a viable product by defining your business goals and building a roadmap to the best possible solution.
            </Typography>
            </div>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={4}
          lg={4}
        >
            <img src="../images/skilled.png" className={classes.myimg}/>
            <div className={classes.mydesc}>
            <Typography variant="h4">
              skilled
            </Typography>
            <Typography variant="h6">
              We can architect a robust and scalable backend solution, integrate and evolve an existing system, or build a custom solution from scratch.
            </Typography>
            </div>
        </Grid>
      </Grid>      
    </div>
  );
};

Readysetcode.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Readysetcode;
