import React from 'react';
import ReactDOM from 'react-dom';

import { AddOption } from './AddOption'
import { Options } from './Options'
import { Header } from './Header';
import { Action } from './Action';
import OptionModal from './OptionModal';

export class IndecitionApp extends React.Component {
  
    state = {
      error : undefined,
      options: [],
      selectedOption: undefined
    }
    
    constructor(props) {
      super(props);
      
      const saved = JSON.parse(localStorage.getItem('data'))
    
      if(saved) {
        this.state.options = saved
      }
    }
    
    deleteOptions = () => {
      this.setState(() => ({options: []}))
    }

    deleteSelectedOption = () => {
      this.setState(() => ({selectedOption: undefined}))
    }
  
    addOptions = (opt) => {
      this.setState((prev) => {
        return {
          options : prev.options.concat([opt])
        }
      });
    }
  
    deleteOpt = (opt) => {
      this.setState((prev) => ({options: prev.options.filter((options) => opt !== options )}))
    }


    handlePick = () => {
      const random = Math.floor(Math.random() * this.state.options.length);    
      const option = this.state.options[random]
      // alert(option)
      this.setState({
        selectedOption : option
      })
    }    
  
    componentDidUpdate(prevProps, prevState) {
      if(prevState.options.length !== this.state.options.length) {
        localStorage.setItem('data', JSON.stringify(this.state.options))
      }
    }
      
    render() {
      const title = 'Indecision'
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <div className='container'>
            <Action hasOptions={this.state.options.length>0} handlePick={this.handlePick} options={this.state.options} />
            <div className="widget">
              <Options delete={this.deleteOptions} deleteOpt={this.deleteOpt} options={this.state.options} />
              <AddOption addOptions = {this.addOptions} />
            </div>
          </div>
          <OptionModal deleteOption = {this.deleteSelectedOption} selectedOption = {this.state.selectedOption}/>
        </div>
      )
    }
  }  