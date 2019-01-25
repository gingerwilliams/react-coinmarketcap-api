import React from "react";
import Checkbox from './Checkbox';
// import Coin from "./Coin";

class Coinlist extends React.Component{

    handleClick() {
        console.log(this.props);
        
        const newCoins = this.props.coins.map(coin => coin);

        console.log(newCoins);

        
        // this.props.coins.sort((a,b) => a.coin.quote.USD.percent_change_24h - b.coin.quote.USD.percent_change_24h)

    }

    render(){
        return(
            <table style={{width:"100%", textAlign:"left"}}> 
                <thead>
                    <tr>
                        <th></th>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th onClick={this.handleClick}>24 Hour Change</th>
                    </tr>
                </thead>
                <tbody>
                
                {this.props.coins.map(coin => 
                    // <Coin name={coin.name} cmcrank={coin.cmc_rank} price={coin.quote.USD.price} pctChange24={coin.quote.USD.percent_change_24h} />
                    <tr>
                        <Checkbox />
                        <td>{coin.name}</td>
                        <td>{coin.cmc_rank}</td>
                        <td>$ {coin.quote.USD.price}</td>
                        <td>{coin.quote.USD.percent_change_24h}</td>                    
                    </tr>
                    ) 
                }
                </tbody>
            </table>
        );
    }
}

export default Coinlist;