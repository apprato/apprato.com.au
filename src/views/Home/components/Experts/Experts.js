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
    margin: '0 5%',
    padding: 0,
    display: 'inline',
  },
  imagefirst:{
    margin: '0 5% 0 1%',
    padding: 0,
    display: 'inline',
  },
  imagelast:{
    margin: '0 0 0 5%',
    padding: 0,
    display: 'inline',
  },
  expertbox: {
    filter: 'drop-shadow(0px 20px 35px rgba(13,68,255,0.2))',
    borderRadius: theme.spacing(2),
    background: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
    padding: '4.375em 6.25rem',
    margin: '9.375em -30px',
    width: 'auto',
  },
  experts: {
    margin: '40px 20px 0',
  },
  images:{
    //display: 'contents',
  }
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

  const flexitems = {
    lineHeight: '42px',
    fontSize: '32px',
    padding: 0,
    listStyle: 'inside',
    display: 'list-item',
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={10, 0}
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
        <Typography variant="h3" style={{ color: "#0e44ff" }}>
          certified experts.
        </Typography>

        <List className={classes.experts}>
          <ListItem style={flexitems}>Adobe Certified Expert Commerce Developer</ListItem>
          <ListItem style={flexitems}>Magento2 Certified Cloud Developer</ListItem>
          <ListItem style={flexitems}>AWS Certified Cloud Practitioner</ListItem>
          <ListItem style={flexitems}>Prince2 Foundation Certified Developer</ListItem>
        </List>

        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          justify="flex-start"
          xs={12}
          md={7}
          data-aos={'fade-up'}
          className={classes.images}
        >
        <List style={{width: '100%'}}>
          <ListItem className={classes.imagefirst}>
          <Image
            src="/images/Layer_125.png"
            alt=""
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          </ListItem>
          <ListItem className={classes.image}>
          <Image
            src="/images/Layer_129.png"
            alt=""
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          </ListItem>
          <ListItem className={classes.image}>
          <Image
            src="/images/Layer_123.png"
            alt=""
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          </ListItem>
          <ListItem className={classes.imagelast}>
          <Image
            src="/images/Layer_128.png"
            alt=""
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          </ListItem>
          </List>
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
