import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        404! <Link to="/">Go home</Link>
      </div>
    );
  }
}