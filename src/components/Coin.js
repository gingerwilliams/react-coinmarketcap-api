import React from "react";
import PropTypes from "prop-types";



class CoinDP extends React.Component{


    render(){
       

        return(
            <div>coin</div>
            // <div>{this.props.name}</div>
            // <tr>
            //     <td>{this.props.cmcrank}</td>
            //     <td>{this.props.name}</td>
            //     <td>$ {this.props.price}</td>
            //     <td>{this.props.pctChange24}</td>                    
            // </tr>

        );
    }
}

// Coin.propTypes = {
//     cmcrank: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
// };

export default CoinDP;