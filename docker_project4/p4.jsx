import React from 'react';
import ReactDOM from 'react-dom';

import DynamicView from './components/dynamic/DynamicView';
import Header from './components/header/Header';
import './components/dynamic/DynamicView.css';



ReactDOM.render(
    <div>
      <Header />
      <DynamicView />
    </div>,
  document.getElementById('reactapp'),
);
