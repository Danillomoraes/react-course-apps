import React from 'react'

const PortifolioPage = (props) => {
  return (
    <div>
      <p>This is my portifolio page with id: {props.match.params.id} </p>
    </div>
  )
}

export default PortifolioPage