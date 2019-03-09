import React from 'react'
import moment from 'moment';
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      description: '',
      note: '',
      amount: '',
      createdAt: now,
      focused: false,
      error: ''
    };

    this.props.expense ? this.state = {...props.expense, createdAt: moment(props.expense.createAt), amount: (props.expense.amount/100)} : null 
  }
  

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}))
  };

  onAmountChange = (e) => {
    const amount = e.target.value;

    amount && amount.match(/^\d*(\.\d{1,})?$/) && this.setState(() => ({amount}))
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}))
  }

  onDateChange = (createdAt) => {
    createdAt && this.setState(() => ({createdAt}))
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({focused}))
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(this.state.description || this.state.amount) {
      this.setState(() => ({error: ''}))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount)*100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      })
    }else {
      this.setState(() => ({error: 'Please provide description and amount.'}))
    }
  }

  render(){
    return (
    <div>
      <form style={{display: 'flex', flexDirection: 'column'}}
            onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <SingleDatePicker 
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.focused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <textarea 
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}>
        </textarea>
        {this.state.error && <p style= {{color: 'red'}}>{this.state.error}</p>}
        <button type="submit">Add Expense</button>
      </form>
    </div>
  )}
}