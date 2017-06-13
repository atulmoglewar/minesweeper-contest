import MineSweeper from './views/mineSweeper.js';
import React from 'react';
import ReactDOM from 'react-dom';


let mineSweeper = <MineSweeper rows="9" cols="9" nMines="10"/> 
ReactDOM.render(mineSweeper, document.getElementById('root'));

