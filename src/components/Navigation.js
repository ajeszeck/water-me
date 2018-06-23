import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes.js';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation-list">
        <li><Link className="list-item" to={routes.SIGN_IN}>Sign In</Link></li>
        <li><Link className="list-item" to={routes.LANDING}>Landing</Link></li>
        <li><Link className="list-item" to={routes.HOME}>Home</Link></li>
        <li><Link className="list-item" to={routes.ACCOUNT}>Account</Link></li>
      </ul>
    </div>);
}


export default Navigation;
