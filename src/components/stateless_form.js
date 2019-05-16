import React from "react";

const SForm = (props) => {
    return (
        <form onSubmit={props.loadAds}>
            <input type="text" name="userId" placeholder="User Id..."/>                
            <button>Get Ads</button>
        </form>
    )
}

export default SForm;