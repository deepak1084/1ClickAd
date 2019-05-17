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

  render() {
    const { classes } = this.props;

    return (
      <Card >
        <CardHeader title= "Your Ad" />
        <CardContent>
        <div className = {classes.box}>
        <div>
        <div>
        <div style={{color: "#1a0dab"}} >{this.props.headline1} | {this.props.headline2} </div>
        <div style={{display: "inline-block"}} className = {classes.AdBox}>Ad</div>
        <div style={{display: "inline-block"}} className = {classes.AdBoxNext}>{this.props.url}</div>
        </div>
        </div>
          <div >{this.props.description} </div>
          </div>
          <CardActions>
        <Button size="large" color="primary">
          Create Ad
        </Button>        
      </CardActions>
        </CardContent>                      
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
