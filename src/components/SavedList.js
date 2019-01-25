import React from 'react';
import Checkbox from './Checkbox';

class SavedList extends React.Component {
    render() {
        return(
            <table style={{width:"100%", textAlign:"left"}}> 
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
                    <tr>
                        <td><Checkbox /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default SavedList;