import React from 'react';

class Checkbox extends React.Component {
    state = {
        isChecked: false
    }

    handleCheck = () => {
        console.log('checked');
        
        this.setState({
            isChecked: !this.state.isChecked
        })
    }

    render() {
        return (
            <div>
                {console.log(this.state.isChecked)}
                <input type="checkbox" key="" defaultChecked={this.state.isChecked} onChange={this.handleCheck} />
            </div>
        )
    }

}

export default Checkbox;