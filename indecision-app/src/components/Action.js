import React from 'react'


export  class Action extends React.Component {
    constructor(props){
      super(props);
    } 
    
    render() {
      return <button 
        className="big-button"
        disabled={!this.props.hasOptions} 
        onClick={this.props.handlePick}>What should I do?
      </button>;
    }
  }
  
  
