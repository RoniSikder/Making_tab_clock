import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Clock from './Clock';
import './Styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <div style={{backgroundColor:"black"}}>
        <Clock />
    </div>
);
