import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import StepSlider from "./StepSlider";


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  box: {
  padding: '10px',
  border: '1px solid #eee' ,
  margin: 0
},
AdBox: {
    flex: '0 0 auto',
    display: 'inline-block',
    border: '1px solid #006621',
    color: '#006621',
    padding: '0 2px',
    fontSize: '12px',
    lineHeight: '14px',
    verticalAlign: 'baseline',
    marginRight: '5px'
},
AdBoxNext: {
    flex: '0 0 auto',
    display: 'inline-block',
    color: '#006621',
    padding: '0 2px',
    fontSize: '12px',
    lineHeight: '14px',
    verticalAlign: 'baseline',
    marginRight: '5px'
},
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});



class RecipeReviewCard extends React.Component {  

constructor(props) {
    super(props);
    this.handleHeadlineChange = this.handleHeadlineChange.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleKeywordsChange = this.handleKeywordsChange.bind(this)
  }

state = {  
    edit: false,
    loader: 0,
    value: '100',
    headline: this.props.headline1 + '|' + this.props.headline2,
    description: this.props.description,
    url: this.props.url,
    keywords: this.props.keywords
  }

 handleEditChange = () => {
  let prev = this.state.edit
    this.setState({
      edit: !prev
    })
  }

  handleSliderChange = (val) => {
    this.setState({
      value: val
    })
  }

handleHeadlineChange(event) {
    this.setState({headline: event.target.value});
  }

  handleUrlChange(event) {
    this.setState({url: event.target.value});
  }
handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleKeywordsChange(event) {
    this.setState({keywords: event.target.value});
  }

  handleSubmit = () => {
    let app = this
    this.setState({loader:1})
    setTimeout(function(){
             this.setState({loader:2});
        }.bind(this),2000);
    
    console.log("submit is called");
    // data1 = {"headlines":[this.props.headline1, this.props.headline2], "description":this.props.description, "keywords":this.props.keywords, "url":this.props.url, "maxCPC":100000}
    fetch('http://127.0.0.1:5000/create-ad', {method:'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({"headlines":this.state.headline.split('|'),"description":this.state.description, "keywords":this.state.keywords.split(','), "url":"www.google.com","maxCPC":this.state.value*1000000} 
    )}).then(function(response) {      
      console.log(response)});
    
    // const response = await api_call.json();
    // console.log(response);  
  }

  render() {
    const { classes } = this.props;
const inputStyle = {
  color: 'black  !important'
}
    return (
      <div style={{border: "6px solid #0f0f46"}}>
      <Card>
      { this.state.edit==false &&  this.state.loader == 0 && <div>

        <CardHeader title= "Your Ad"/>
        <CardContent>
        <div className = {classes.box}>
        <div>
        <div>
        <div style={{color: "#1a0dab"}} >{this.state.headline} </div>
        <div style={{display: "inline-block"}} className = {classes.AdBox}>Ad</div>
        <div style={{display: "inline-block"}} className = {classes.AdBoxNext}>{this.state.url}</div>
        </div>
        </div>
          <div >{this.state.description} </div>
          </div>
          <div>
          Keywords : 
          <div style = {{ border: '2px solid', borderRadius: '10px/15px', marginBottom: '10px'}} > 
            {this.state.keywords}
          </div>
          </div>
          <div>
                Max Spending per day: {this.state.value} INR
                </div>
          <CardActions>
        <Button size="large" color="primary" onClick={this.handleSubmit}>
          Create Ad
        </Button>        
        <Button size="large" color="primary" onClick={this.handleEditChange}>
          Edit Ad
        </Button>        
      </CardActions>
       </CardContent>
       </div>
     } 



{ this.state.edit==false &&  this.state.loader == 1 && <div>

        <CardHeader title= "Your Ad"/>
        <CardContent>
        <div className = {classes.box}>
        <div>
        <div>
        <div style={{color: "#1a0dab"}} >{this.state.headline} </div>
        <div style={{display: "inline-block"}} className = {classes.AdBox}>Ad</div>
        <div style={{display: "inline-block"}} className = {classes.AdBoxNext}>{this.state.url}</div>
        </div>
        </div>
          <div >{this.state.description} </div>
          </div>
          <div>
          Keywords : 
          <div style = {{ border: '2px solid', borderRadius: '10px/15px', marginBottom: '10px'}} > 
            {this.state.keywords}
          </div>
          </div>
          <div>
                Max Spending per day: {this.state.value} INR
                </div>
          <CardActions>
            <Button variant="outline-success" style = {{color: "gray", border: "1px solid"}} disabled>Your Ad is being created</Button>

      </CardActions>
       </CardContent>
       </div>
     } 

{ this.state.edit==false &&  this.state.loader == 2 && <div>

        <CardHeader title= "Your Ad"/>
        <CardContent>
        <div className = {classes.box}>
        <div>
        <div>
        <div style={{color: "#1a0dab"}} >{this.state.headline} </div>
        <div style={{display: "inline-block"}} className = {classes.AdBox}>Ad</div>
        <div style={{display: "inline-block"}} className = {classes.AdBoxNext}>{this.state.url}</div>
        </div>
        </div>
          <div >{this.state.description} </div>
          </div>
          <div>
          Keywords : 
          <div style = {{ border: '2px solid', borderRadius: '10px/15px', marginBottom: '10px'}} > 
            {this.state.keywords}
          </div>
          </div>
          <div>
                Max Spending per day: {this.state.value} INR
                </div>
          <CardActions>
            <Button variant="outline-success" style = {{color: "green", border: "1px solid"}} disabled>Your Ad is created</Button>

      </CardActions>
       </CardContent>
       </div>
     } 

  

     { this.state.edit==true &&  this.state.loader != 1 && <div>

        <CardHeader title= "Your Ad (Edit)"/>
        <CardContent>
        <div className = {classes.box}>
        <div>
        <div>
        <input style={{color: "#1a0dab"}}  type="text" name="headline" value ={this.state.headline}
        onChange={this.handleHeadlineChange}
        />                
        <div>
        <div style={{display: "inline-block"}} className = {classes.AdBox}>Ad</div>      

        <input style={{display: "inline-block", width: "87%"}} className = {classes.AdBoxNext} type="text" name="url" value ={this.state.url}
        onChange={this.handleUrlChange}
        />   
        </div>             
        </div>
        </div>
          <input style={{display: "inline-block", width: "87%"}}type="text" name="url" value ={this.state.description}
        onChange={this.handleDescriptionChange}/>
        </div>
        <div>
          Keywords : 
          <input style={{ border: '2px solid', borderRadius: '10px/15px', marginBottom: '10px'}} type="text" name="url" value ={this.state.keywords}
        onChange={this.handleKeywordsChange}/>
                    
          </div>
        <StepSlider handleSliderChange = {this.handleSliderChange}/>                            
        Max Spending per day: {this.state.value} INR
                         
          <CardActions>
     
        <Button size="large" color="primary" onClick={this.handleEditChange}>
          Save
        </Button>        
      </CardActions>
       </CardContent>
       </div>
     }                      
      </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
