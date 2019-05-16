import React from "react";

class Form extends React.Component{

    render(){

        return(
                <form onSubmit = {this.props.loadWeather}>
                    <input type="text" name="userId" placeholder="User Id..."/>                
                    <button>Get Ads</button>
                </form>
           
        )
    }
}

export default Form;