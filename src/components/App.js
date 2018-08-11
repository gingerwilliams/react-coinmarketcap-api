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
        const url = `https://api.coinmarketcap.com/v1/ticker/`;

        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ coins: json }));
    }
    render(){
        return(
            <div>
                <Coinlist coins={this.state.coins}/>

                
            </div>
        )
        
    }
}

export default App;