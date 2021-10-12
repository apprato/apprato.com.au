import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, List, ListItem } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { Grid, Typography, Divider } from '@material-ui/core';
import { LearnMoreLink, Image } from 'components/atoms';
import { SectionHeader, CountUpNumber } from 'components/molecules';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 0),
    },
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: '33em',
    height: 'auto',
    [theme.breakpoints.down('lg')]: {
      width: '15em',
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
  icon: {
    fontSize: 24,
  },
  devider: {
    background: '#8998c0',
    marginBottom: '50px',
  },
  sociallink: {
    float: 'right',
    display: 'inline-block',
    paddingLeft: '35px',
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
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
          md={4}
          lg={6}
          data-aos={'fade-up'}
        >
          <SectionHeader
            title={
              <span>
                let’s work together.                    
              </span>
            }
            subtitle="Our goal is to help you achieve yours, now and into the future. Speak to a digital specialist now - not a salesaman."
            ctaGroup={[
              <LearnMoreLink
                title="Discuss your project"
                href="#"
                variant="h6"
              />,
            ]}            
            align="left"
            fadeUp
            disableGutter
            titleVariant="h3"
          />
        </Grid>
      </Grid>
        <Typography variant="h6">
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
            md={8}
            lg={9}
            data-aos={'fade-up'}
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
            md={4}
            lg={3}
            data-aos={'fade-up'}
          >
          <a href="#" className={classes.sociallink}>Linkedin</a>
          <a href="#" className={classes.sociallink}>Insta</a>
          <a href="#" className={classes.sociallink}>Github</a>
          </Grid>          
        </Grid>
        <Divider className={classes.devider} />
        <Typography variant="subtitle1">
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
