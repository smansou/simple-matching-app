import React, { Component, useState } from 'react';
import Controls from './Controls';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import { users } from './assets/MOCK_DATA';
import { useSpring, animated } from 'react-spring'
import {Spring} from 'react-spring';


 function UserCard (props){
  

  return (
            <div className={props.myclass}> 
                <div className="ui link cards card-container ">
          <div className={`card`}>
            <div className="image">
              <img src={users[props.user].image}/>
            </div>
            <div className="content">
              <div className="header">{users[props.user].first_name}</div>
              <div className="meta">
                <a>{users[props.user].occupation}</a>
              </div>
              <div className="description">
                {users[props.user].bio}
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
  
        
        
    


export default UserCard;