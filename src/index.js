import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Navbar} from './components/Nav.js';
import {Galleryimg} from './components/GalleryImg.js';
import reportWebVitals from './reportWebVitals';
import {App} from './App.js';

const rootNav = ReactDOM.createRoot(document.getElementById('root'));

rootNav.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
