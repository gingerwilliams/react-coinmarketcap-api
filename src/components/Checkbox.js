import React from 'react';

class Checkbox extends React.Component {

   
   
    render() {
        return (
            <div>
                {console.log(this.props.isChecked)}
                {/* <input type="checkbox" key="" defaultChecked={this.state.isChecked} onChange={this.handleCheck} /> */}
                <input 
                    name="isChecked"
                    type="checkbox" 
                    defaultChecked={this.props.isChecked}
                    
                />
            </div>
        )
    }

}

export default Checkbox;