import React from 'react'
import TodoList from './components/TodoList'
import TodoAdd from './components/TodoAdd'
import './Style.css'
import { Provider } from 'react-redux'
import Reducer from './Reducer'
import { createStore, compose } from 'redux'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const Compose = compose(devTools)

const mySotre = createStore(Reducer, Compose)


const App = () => {
  return (
    <Provider store={mySotre}>
      <div>
        <TodoAdd />
        <TodoList />
      </div>
    </Provider>
  )
}

export default App