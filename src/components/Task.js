import React, { useState } from 'react'
import { connect } from 'react-redux'
import '../Style.css'
import EditTask from './EditTask'

const Task = ({ el, dispatch, todo }) => {

  const [input, setInput] = useState('')

  const modification = (id) => {
    const newText = todo.map(el => {
      return el.id == id ? { ...el, description: input } : el
    })
    return newText
  }
  const handleAdd = (text) => {
    dispatch({
      type: 'ADD_TEXT',
      payload: text
    })
  }
  return (
    <div className='todo mt-3' key={el.id} >
      <div className='mt-3 ml-3 formEdit'>
        <p className={el.isDone ? 'done' : ''}>{el.description} </p>
        {!el.Edit &&
          <form>
            <input onChange={(e) => { setInput(e.target.value) }} value={input} />
            <button className='btn-secondary' onClick={(e) => {
              e.preventDefault();
              handleAdd(modification(el.id));
              setInput('')
            }}>Update</button>
          </form>}
      </div>
      <div className='mr-2'>
        <EditTask id={el.id} edit={el.Edit} />
        <button className='btn-secondary ' onClick={() => dispatch({ type: "Done", payload: el.id })} > {!el.isDone ? 'Done' : 'Undo'} </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return ({
    todo: state.todo
  })
}

export default connect(mapStateToProps)(Task)