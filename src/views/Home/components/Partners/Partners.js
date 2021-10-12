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
    maxWidth: '50vw',
    opacity: '1',
  },
  navigationContainer: {
    display: 'table',
    alignItems: 'center',
    margin: '0 auto',
    padding: '5em 0',
  },
  listItem: {
    cursor: 'pointer',
    paddingTop: 0,
    paddingBottom: 0,
    display: 'inline',
    margin: '',
  },
  listItemText: {
    lineHeight: '0',
    color: '#202f43',
    fontWeight: 500,
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
    alignItems: 'center',
    margin: '0 auto',
    display: 'block',
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
      <Grid container> 
        <Grid item xs={12} md={12} data-aos="fade-up">
          <SectionHeader
            title="From connected services to commerce platforms, we provide you with the custom tools you need to emerge as a leader in your industry."
            subtitle=""
            align="center"
            label=""
            disableGutter
          />
        </Grid>
      </Grid>
      <List className={classes.navigationContainer}>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
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
              variant="body1"
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
              variant="body1"
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
              variant="body1"
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
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/case-studies"
            >
              Shipping & Fulfillment
            </Typography>
          </ListItem>
        </List>
      <Grid container className={classes.partners}>
        <Grid item data-aos="fade-up">
          <Grid container spacing={6} justif="center" alignItems="center">
            {data.map((item, index) => (
              <Grid item xs={5} md={2} key={index}>
                  <Image
                    sx={{ color: '#202f43' }}
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
