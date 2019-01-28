import React from "react";
import { Table } from 'react-bootstrap';
import Checkbox from './Checkbox';
import Button from './Button';
// import Coin from "./Coin";

class Coinlist extends React.Component{
    state = {
        isChecked: false
    }

    handleCheck = () => {
        console.log(this.state.isChecked)

        this.setState({
            isChecked: !this.state.isChecked
        });
    }


    render(){
        return(
            <Table striped bordered condensed hover style={{width:"100%", textAlign:"left"}}> 
                <thead>
                    <tr>
                        <th>
                            <button onClick={this.handleCheck}>select all</button>
                            <Button 
                                // isChecked={this.state.isChecked} 
                                handleCheck={this.handleCheck} 
                            />
                        </th>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24 Hour Change</th>
                    </tr>
                </thead>
                <tbody>
                
                {this.props.coins.map(coin => 
                    // <Coin name={coin.name} cmcrank={coin.cmc_rank} price={coin.quote.USD.price} pctChange24={coin.quote.USD.percent_change_24h} />
                    <tr>
                        <td>
                            <Checkbox 
                                isChecked={this.state.isChecked}
                            />
                        </td>
                        <td>{coin.cmc_rank}</td>
                        <td><a href="#">{coin.name}</a></td>
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