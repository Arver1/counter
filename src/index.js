import React from 'react'
import {render} from 'react-dom'
import Store from './store'

const inititialState = {count: 0};

function updateState(state, action) {
    switch(action.type) {
        case 'INCREMENT' : return {count: state.count + action.amount}
        case 'DECREMENT' : return {count: state.count - action.amount}
        default: return state
    }
}

const incrementAction = {type: 'INCREMENT', amount: 1}
const decrementAction = {type: 'DECREMENT', amount: 1}

const store = new Store(updateState, inititialState)

class Counter extends React.Component {

    componentDidMount(){
        store.subscribe(() => this.forceUpdate())
    }

    increment() {
        store.update(incrementAction)
    }

    decrement() {
        store.update(decrementAction)
    }

    render(){
        return (
            <div className="rect__wrapper">
                <button className="counter" onClick={() => this.decrement()}><span className="counter__toggle">-</span></button>
                <span className="counter__result">{store.state.count}</span>
                <button className="counter" onClick={() => this.increment()}><span className="counter__toggle">+</span></button>
            </div>
        )
    }
}

render(<Counter />, document.getElementById('rect'));