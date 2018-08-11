import React from "react";
import Dashboard from "./Dashboard";
import Coinlist from "./Coinlist";

import axios from "axios";
import API_KEY_CMC from '../../config_keys.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            coins: []
          };

    }
    componentDidMount() {
        // const endpoint = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=';
        // const url = endpoint + API_KEY_CMC;
        // console.log(API_KEY_CMC);
        // console.log(url);

        //const url = "https://api.coinmarketcap.com/v2/ticker/";
        const url = "https://api.coinmarketcap.com/v1/ticker/";


        axios
            .get(url)
            .then(
                res => {
                    //create an array from data
                    const arr = res.data.map(coin =>{ 
                        return {
                            id: coin.id,
                            name: coin.name
                        };
                    });

                    // console.log(res.data)
                    // console.log(arr)
                    
                    //New state variable
                    const newState = Object.assign({}, this.state, {
                        coins: arr
                    });
                    
                    //Store the new state Variable
                    this.setState(newState);
                   
                }
               
            )
            
        
    }
    render(){
        return(
            <div>{this.state.name}
                <Coinlist coins={this.state.coins}/>
            </div>
        )
        
    }
}

export default App;