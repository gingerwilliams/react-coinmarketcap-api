import React from "react";
import PropTypes from "prop-types";

class Coin extends React.Component{
    render(){
        return(
            <div>{this.props.name}</div>
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Coin;