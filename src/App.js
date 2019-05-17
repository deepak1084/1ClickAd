import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";
import Ads from "./components/Ads";
import Card from "./components/Card";

// import SWeather from "./components/stateless_weather";
// import SForm from "./components/stateless_form"
import Titles from "./components/titles";
import * as _ from "lodash";
import StepSlider from "./components/StepSlider";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.getUserData = this.getUserData.bind(this);
    this.getUserData();
  }

  state = {
    posts: [],
    website: "",
    page_description: "",
    name: "",
    short_about: "",
    profile_image: "",
    phone: "",
    cover_image: "",
    email: "",
    categories: []
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
    return ( 
      <div>
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
      
      </div>

    )
  }
}
export default App;
