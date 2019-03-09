import React from 'react';

export class AddOption extends React.Component {
  
    constructor(props) {
      super(props);
      this.send = this.send.bind(this)
    }
  
    send(e) {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      if(option) {
        this.props.addOptions(option)
      }
    }
    render() {
      return (
        <div>
          <form className="add-option" onSubmit={this.send}>
            <input className="add-option__input" type="text" name="option" />
            <button className='button'>AddOption</button>
          </form>
        </div>
      )
    }
  }
  