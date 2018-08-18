import React from "react";
import Coin from "./Coin";

class Coinlist extends React.Component{
    render(){
        return(
            <span> 
                {this.props.coins.map(coin => 
                        <Coin name={coin.name}/> 
                    ) 
                }
            </span>
        );
    }
}

export default Coinlist;