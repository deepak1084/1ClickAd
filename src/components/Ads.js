import React from "react";

class Ads extends React.Component{

    render(){

        return(

            <div className="weather-info">
                <span className="weather__value">  {this.props.description}</span>                    
                <span className="weather__value">  {this.props.headline}</span>                                    
            </div>
        )
    }
}

export default Ads;