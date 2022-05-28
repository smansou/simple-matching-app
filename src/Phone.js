import React, { Component } from 'react';
import Controls from './Controls';
import Dashboard from './Dashboard';
import UserCard from './UserCard';
import { users } from './assets/MOCK_DATA';

class Phone extends Component {
    constructor(props){
        super(props);
        this.state={
            animate: false,
            user: Math.floor(Math.random()*users.length),
            likes: 0,
            dislikes: 0,
        }
    }
    incDecLikes = (incDec) => {
        incDec ?  this.setState(prev =>{ return { likes: prev.likes+1, user: prev.user+1, animate:'swipe', animate: true}})
        : this.setState(prev =>{ return {dislikes: prev.dislikes+1, user: prev.user+1, animate: true}});
        
        setTimeout(()=>{
            this.setState({animate: true});
            setTimeout(this.setState({animate: false}),500)},500);
        ;
    }



    render() {
        console.log(this.state.animate);
        return (
            <div className="smartphone">
                <div className="contents">
                    <Dashboard likes={this.state.likes} dislikes={this.state.dislikes}/> 
                     <UserCard myclass={this.state.animate ? 'swipe' : ''} user={this.state.user} />
                     
                    <Controls callback={this.incDecLikes}/>
                    
                    
                </div>
            </div>
        );
    }
}


export default Phone;