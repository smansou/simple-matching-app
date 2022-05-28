import React, { Component } from 'react';
import Controls from './Controls';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import { users } from './assets/MOCK_DATA';
// import ReactCSSTransitionGroup from 'react-transition-group';
import {Spring} from 'react-spring';

class UserCard extends Component {
  constructor(props){
    super(props);
    this.state={
      user: 0,
      animate: ''
    }
  }
 
 

    render() {
      
        return (
          
          
        
          <Spring
          from={{opacity: 1}}
          to={{opacity: 0}}>
            {props => (
              <div style={props}>
                <div className="ui link cards card-container ">
          <div className={`card`}>
            <div className="image">
              <img src={users[this.props.user].image}/>
            </div>
            <div className="content">
              <div className="header">{users[this.props.user].first_name}</div>
              <div className="meta">
                <a>{users[this.props.user].occupation}</a>
              </div>
              <div className="description">
                {users[this.props.user].bio}
              </div>
            </div>
            <div className="extra content">
              <span className="right floated">
             {Math.floor(Math.random()*22)} km
              </span>
              <span>
                <i className="user icon"></i>
                {Math.floor(Math.random()*12)} Common interests
              </span>
            </div>
          </div>
        </div>
              </div>
            )}
          
        </Spring>
        );
    }
}

export default UserCard;