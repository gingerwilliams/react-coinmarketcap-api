import React from "react";
import Coin from "./Coin";

class Coinlist extends React.Component{
    render(){
        return(
            <table style={{width:"100%", textAlign:"left"}}> 
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24 Hour Change</th>
                    </tr>
                </thead>
                <tbody>
                
                {this.props.coins.map(coin => 
                    <Coin name={coin.name} cmcrank={coin.cmc_rank} price={coin.quote.USD.price} pctChange24={coin.quote.USD.percent_change_24h} />
                    ) 
                }
                </tbody>
            </table>
        );
    }
}

export default Coinlist;