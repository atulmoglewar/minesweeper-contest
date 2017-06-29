import MineSweeper from './views/mineSweeper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './views/header.js'
import Home from './views/home.js'
import BG from './views/bg.js'

// let mineSweeper = <MineSweeper rows="9" cols="9" nMines="10"/> 
// ReactDOM.render(mineSweeper, document.getElementById('root'));
let page = <Home />;
ReactDOM.render(page, document.getElementById('root'));

