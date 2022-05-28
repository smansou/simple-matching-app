import React, { Component } from 'react';
import { faker } from 'https://esm.sh/@faker-js/faker';

class Controls extends Component {

    render() {
        return (
            <div className='btn-container'>
               
                <div onClick={()=>this.props.callback(false)} className="circular ui grey icon button">
                    <i className=' x icon'/>
                </div>
                <div onClick={()=>this.props.callback(true)}  className="circular ui red icon button">
                    <i className='heart icon'/>
                </div>
            </div>
        );
    }
}

export default Controls;