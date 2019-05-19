import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";
import Ads from "./components/Ads";
import Card from "./components/Card";
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import SWeather from "./components/stateless_weather";
// import SForm from "./components/stateless_form"
import Titles from "./components/titles";
import * as _ from "lodash";
import StepSlider from "./components/StepSlider";
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
  bootstrapRoot: {
    boxShadow: 'none',
    textTransform: 'none',
    width: '400px',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends React.Component {





  constructor(props) {
    super(props);
    this.getUserData = this.getUserData.bind(this);
    this.getUserData();

  }

  state = {
    posts: [],
    ads: false,
    website: "",
    page_description: "",
    name: "",
    short_about: "",
    profile_image: "",
    phone: "",
    cover_image: "",
    email: "",
    categories: [],
        open: false,

  }

  //getUserData is a method we'll use to make the api call
  getUserData = async (e) => {
    const api_call = await fetch('http://127.0.0.1:5000/');
    const response = await api_call.json();
    console.log(response);  
    this.setState({
        posts: response.data, 
        website: response.website,
        page_description: response.page_description,
        name: response.name,
        short_about: response.short_about,
        profile_image: response.profile_image,
        phone: response.phone,
        cover_image: response.cover_image,
        email: response.email,
        categories: response.categories
      })
  }

  handleFacebookChange = () => {
  let prev = this.state.ads
    this.setState({
      ads: !prev
    })
  }
  
  handleInsChange = () => {
      this.setState({ open: true });
  }
 
 handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let posts = this.state.posts
    let website = this.state.website
    let page_description = this.state.page_description
    let name = this.state.name
    let short_about = this.state.short_about
    let profile_image = this.state.profile_image
    let phone = this.state.phone
    let cover_image = this.state.cover_image
    let email = this.state.email
    let categories = this.state.categories
      const { classes } = this.props;

    return ( 
      <div>
      { this.state.ads==true &&  
         <div className="wrapper">
          <div className="main">
            <div className="container" className="col-xs-6 title-container">
                <div >
                <Titles/>
                </div>
                </div>
                <div className="col-xs-6 form-container">                          
                   {_.map(posts, (post, index) =>  {
                      return (
                        <Card description={post.text} headline1={post.headline} headline2={name} image = {post.image} keywords={post.keywords} website={website} url={post.url} page_description={page_description} phone={phone} email={email}/> ) }                    
                  )}
                </div>
              </div>
          </div>
      }

      { this.state.ads==false &&  
         <div className="wrapper">
          <div className="main">
            <div className="container" className="col-xs-6 title-container">
                <div >
                <Titles/>
                </div>
                </div>
                <div>
                <div className="col-xs-6 form-container" style = {{paddingTop: '200px' ,paddingLeft: '100px'}}>                          
        <div>        
      <Button
        variant="contained"
        color="primary"
        disableRipple
        className={classNames(classes.margin, classes.bootstrapRoot)}
        onClick={this.handleFacebookChange}
      >
        Import from Facebook
      </Button>
      </div>
      <div>
      <Button
        variant="contained"
        color="primary"
        disableRipple
        className={classNames(classes.margin, classes.bootstrapRoot)}
        onClick={this.handleInsChange}
      
      >
        Import From Instagram
      </Button>
      </div>
      <div>
      <Button
        variant="contained"
        color="primary"
        disableRipple
        className={classNames(classes.margin, classes.bootstrapRoot)}
          onClick={this.handleInsChange}
      >
        Import from Twitter
      </Button>      
      </div>

                </div>  
                </div>                
              </div>
          </div>
      }
      </div>

    )
  }
}
export default withStyles(styles)(App);
