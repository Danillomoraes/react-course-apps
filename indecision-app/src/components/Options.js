import React from 'react'
import { Option } from './Option'

export const Options = (props) => {
    return (
      <div>
        <div className="widget-header">
          <h3 className='widget-header__title'>Yours Options</h3>
          <button className='button button--link' onClick = {props.delete}>Remove Items</button>
        </div>
          {props.options.length === 0 && <p className='widget__message'> Please add an option to get started!</p>}
          {
            props.options.map((option, i) => 
            <div key={i}>
              <Option deleteOpt={(e) => {props.deleteOpt(option)}} key={i} option={i+'. '+option}/>            
            </div>
            )        
          }
      </div>    
    )
  }
  