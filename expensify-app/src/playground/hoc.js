import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponen) => {
  return (props) => (
    <div>
      <p>This is private info. Please don't share!</p>
      <WrappedComponen {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated && <WrappedComponent {...props} /> || <p>Please, login to have full access to this file!</p>}
    </div>
  )
}

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);



ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));