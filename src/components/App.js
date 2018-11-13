import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Coinlist from "./Coinlist";
import API_KEY_CMC from '../../config_keys.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            coins: []
        };
        // this.getCoins = this.getCoins.bind();
    }

    // create an arrow funciton so you dont have to bind it
    // getFunc = (e) => {
    //     const endpoint = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=';
    //     const url = endpoint + API_KEY_CMC;
    //     e.preventDefault()
    //     console.log("got this function")
    // }

    componentDidMount() {
        const url = `https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY_CMC}`;
       
        fetch(url)
            .then(res => res.json())
            .then(json => 
                this.setState({ 
                    coins: json.data
                })
            ).catch((error) => {
                console.error(error)
            });
    }
    
    render(){
        return(
            <div>
                <Header />
                {console.log(this.state.coins)}

                {/* on the main compenent you must pass the state to the compoenent with this.state */}
                <Coinlist coins={this.state.coins} />
            </div>
        )
    }
}

export default App;