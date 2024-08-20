import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/src/Header.js';
import Body from './components/src/body.js';

function Application() {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Application/>);