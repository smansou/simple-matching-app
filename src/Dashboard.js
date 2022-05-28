import React, { Component } from 'react';
import Controls from './Controls';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className='ui segment dash'>
                <p>
                    <i className='heart red icon' />
                    {this.props.likes}
                </p>

                <p>
                    <i className='x orange icon' />
                    {this.props.dislikes}
                </p>

            </div>


        );
    }
}

export default Dashboard;