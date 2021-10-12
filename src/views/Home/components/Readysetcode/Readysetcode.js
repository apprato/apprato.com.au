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
        spacing={4}
      >
        <Typography variant="h2">ready. set. code.</Typography>
        <Typography variant="h6" display="block">
          As specialists in custom design and engineering of leading technology, our offering consists of complete end-to-end service that creates value, builds relationships and helps your business thrive in our digital world.
        </Typography>
      </Grid>
      <Grid
        container
        justify="space-between"
        spacing={8}
      >
       <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={4}
          lg={4}
        >
            <img src="../images/agile.png"/>
            <div>
            <Typography variant="h5">
              agile
            </Typography>
            <Typography>
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
            <img src="../images/inspiring.png"/>
            <div>
            <Typography variant="h5">
              inspiring
            </Typography>
            <Typography>
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
            <img src="../images/skilled.png"/>
            <div>
            <Typography variant="h5">
              skilled
            </Typography>
            <Typography>
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
