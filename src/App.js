import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";
import Ads from "./components/Ads";
// import SWeather from "./components/stateless_weather";
// import SForm from "./components/stateless_form"
import Titles from "./components/titles";
import * as _ from "lodash";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.getUserData = this.getUserData.bind(this);
  }

  state = {
    posts: [],

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //getUserData is a method we'll use to make the api call
  getUserData = async (e) => {
  
    const token = e.target.elements.userId.value;
    e.preventDefault();   
    const api_call = await fetch(`https://my-json-server.typicode.com/deepak1084/demo/db`);
    const response = await api_call.json();
    console.log(response);  
    this.setState({
        posts: response.posts,      
      })
  }

  render() {
    let posts = this.state.posts
    return (    
      <div>
         <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Titles />
                </div>
                <div className="col-xs-7 form-container">

                <Form loadWeather={this.getUserData} />                  
                   {_.map(posts, (post, index) =>  {
                      return (
                        <Ads description={post.description} headline={post.headline} /> ) }                    
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default App;
