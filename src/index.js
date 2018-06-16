import React from 'react'
import {render} from 'react-dom'
import store from './store'

const inititialState = 0;

function Counter(){
    return (
        <div className="rect__wrapper">
            <button className="counter"><span className="counter__toggle">-</span></button>
            <span className="counter__result">0</span>
            <button className="counter"><span className="counter__toggle">+</span></button>
        </div>
    )
}

render(<Counter />, document.getElementById('rect'));