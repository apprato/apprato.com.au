import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { LearnMoreLink, Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import {
  List,
  ListItem,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  logo: {
    opacity: '1',
    [theme.breakpoints.down('md')]: {
      maxWidth: '20vw',
      marginTop: '40px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '11vw',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '7vw',
    },
  },
  navigationContainer: {
    textAlign: 'center',
    margin: '0 auto',
    padding: '8rem 0',
    [theme.breakpoints.down('lg')]: {
      padding: '4rem 0',
    },    
    [theme.breakpoints.down('md')]: {
      padding: '4rem 0 3rem',
    },    
  },
  listItem: {
    cursor: 'pointer',
    paddingTop: 0,
    paddingBottom: 0,
    display: 'inline-block',
    margin: '',
    width: 'auto',
    lineHeight: '4rem',
  },
  listItemText: {
    lineHeight: '0',
    color: '#202f43',
    fontWeight: 500,
    padding: '0',
    flex: '0 0 auto',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    paddingBottom: '1em',
    '&:hover':{
      color: '#0d44ff',
      borderBottom: '0.2em solid #0d44ff',
    },
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },  
  partners: {
    textAlign: 'center',
    margin: '0 auto 17.1875rem',
    display: 'block',
    [theme.breakpoints.down('lg')]: {
      margin: '0 auto 5rem',
    },    
  },
}));

const Partners = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spaces={0}> 
        <Grid item justify="flex-start" align="center" style={{margin:'0 7vw'}}>
        <Typography variant="h4">
          From connected services to commerce platforms, we provide you with the custom tools you need to emerge as a leader in your industry.
        </Typography>
        </Grid>
      </Grid>
      <Grid container spaces={0}> 
      <List className={classes.navigationContainer}>
          <ListItem className={classes.listItem}>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/home"
            >
              Platform as a Service
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/about"
            >
              Marketing           
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/services"
            >
              Inventory & Integration
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/team"
            >
              Payments and Security
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/case-studies"
            >
              Shipping & Fulfillment
            </Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid container className={classes.partners}>
        <Grid item data-aos="fade-up" justif="center" >
          <Grid container justif="center" alignItems="center">
            {data.map((item, index) => (
              <Grid item xs={4} md={2} key={index}>
                  <Image
                    style={{ filter: 'invert(12%) sepia(8%) saturate(4209%) hue-rotate(175deg) brightness(96%) contrast(85%)' }}
                    src={item.logo}
                    alt={item.name}
                    className={classes.logo}
                    lazy={false}
                  />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Partners;
