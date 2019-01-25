import React from "react";
import { Table } from 'react-bootstrap';
import Checkbox from './Checkbox';
// import Coin from "./Coin";

class Coinlist extends React.Component{

    render(){
        return(
            <Table striped bordered condensed hover style={{width:"100%", textAlign:"left"}}> 
            {console.log(this.props.coins)}
                <thead>
                    <tr>
                        <th></th>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24 Hour Change</th>
                    </tr>
                </thead>
                <tbody>
                
                {this.props.coins.map(coin => 
                    // <Coin name={coin.name} cmcrank={coin.cmc_rank} price={coin.quote.USD.price} pctChange24={coin.quote.USD.percent_change_24h} />
                    <tr>
                        <td><Checkbox /></td>
                        <td>{coin.cmc_rank}</td>
                        <td><a href={`/:${coin.id}`}>{coin.name}</a></td>
                        <td>$ {coin.quote.USD.price.toFixed(2)}</td>
                        <td>{coin.quote.USD.percent_change_24h.toFixed(2)} %</td>                    
                    </tr>
                    ) 
                }
                </tbody>
            </Table>
        );
    }
}

export default Coinlist;