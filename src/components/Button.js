import React from 'react';

class Button extends React.Component {

    handleChange = () => {
        this.props.handleCheck()
    }
    
    render() {
        return (
            <div>
                {console.log()}
                <button onClick={this.handleChange}> Select All</button>
            </div>
        )
    }

}

export default Button;