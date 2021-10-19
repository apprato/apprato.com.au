import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, List, ListItem } from '@material-ui/core';
import { Grid, Typography, Divider } from '@material-ui/core';
import { LearnMoreLink, Image } from 'components/atoms';
import { SectionHeader, CountUpNumber } from 'components/molecules';


const useStyles = makeStyles(theme => ({
  root: {
    color: '#fff',
    "& h6 a": {color: '#fff', textDecoration:'none'},
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 0),
    },
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(30, 0, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(15, 0, 0),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: '33em',
    height: 'auto',
    margin: '9.375em 0 6.25em',
    [theme.breakpoints.down('lg')]: {
      width: '15em',
      margin: '4.5em 0 3.5em',
    },    
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  devider: {
    background: '#8998c0',
    marginBottom: '50px',
  },
  sociallink: {
    float: 'right',
    display: 'inline-block',
    paddingLeft: '35px',
    fontSize: '2.5em',
    color: '#0e43f2',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.25em',
    },    
  },
  toptitle: {
    marginBottom: '2.5rem',
  },
  submsg: {
    fontSize:'2.625rem',
    [theme.breakpoints.down('lg')]: {
      fontSize:'1.5rem',
    },
  },
  learnmore: {
    margin: '5rem 0',
    [theme.breakpoints.down('lg')]: {
        margin: '2rem 0',
    },
  },
  address: {
    fontSize:'2.25rem',
    [theme.breakpoints.down('lg')]: {
      fontSize:'1.25rem',
    },
  },
  copy: {
    fontSize:'1.875rem',
    [theme.breakpoints.down('lg')]: {
      fontSize:'1.25rem',
    },
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div id="contact" className={classes.footerContainer}>
      <Grid
        container
        spacing={10}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={8}
          lg={6}
        >
         <Typography variant="h1" className={classes.toptitle}>
            let’s work together.
          </Typography>
         <Typography className={classes.submsg}>
            Our goal is to help you achieve yours, now and into the future. Speak to a digital specialist now - not a salesaman.
          </Typography>
          <SectionHeader
            subtitle={
              <span>
                <LearnMoreLink
                title="Discuss your project"
                href="#"
                typographyProps={{ variant: 'h5' }}
                className={classes.learnmore}
              />
              </span>
            }
            align="left"
            disableGutter
          />
        </Grid>
      </Grid>
        <Typography variant="h6" className={classes.address}>
          <a href="mailto:hello@apprato.com.au">hello@apprato.com.au</a><br/>
          <a href="tel:+6410477418257">Tel: +6410477418 257</a><br/>
          257 Chapel St, Prahran VIC 3181
        </Typography>


        <Grid
          container
          justify="space-between"
          spacing={4}
        >
          <Grid
            item
            container
            alignItems="center"
            xs={12}
            md={7}
            lg={8}
          >        
          <List disablePadding>
            <ListItem disableGutters className={classes.logoContainerItem}>
              <div className={classes.logoContainer}>
                <a href="/" title="thefront">
                  <Image
                    className={classes.logoImage}
                    src="/images/logo_footer.png"
                    alt="thefront"
                    lazy={false}
                  />
                </a>
              </div>
            </ListItem>
          </List>
          </Grid>
          <Grid
            item
            container 
            justify="flex-end"
            alignItems="center"
            xs={12}
            md={5}
            lg={4}
          >
          <a href="#" className={classes.sociallink}>Linkedin</a>
          <a href="#" className={classes.sociallink}>Insta</a>
          <a href="#" className={classes.sociallink}>Github</a>
          </Grid>          
        </Grid>
        <Divider className={classes.devider} />
        <Typography className={classes.copy}>
          © 2021 Apprato Pty Ltd. All Right Reserved.
        </Typography>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
