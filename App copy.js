import React, { Component } from 'react'
import './Style.css'

class App extends Component {

state = {
  todo:[
    {text:'learn react props', id:0, isComplete:false},
    {text:'Learn react state', id:1, isComplete:false},
    {text:'Learn react hooks', id:2, isComplete:false},
    {text:'Learn react rooter', id:3, isComplete:false},
  ],
  textInput:''
}

  render() {

const handleComplete=(index)=>{
  this.setState({todo : this.state.todo.map(el=>{
    return (el.id===index ? {...el, isComplete: !el.isComplete} : el)
  })})
}

const handleDelete=(index)=>{
  this.setState({todo : this.state.todo.filter(el=>{
    return el.id !== index
  })})
}


const handleSubmit=(e)=>{
  this.setState({textInput: e.target.value})
}


const handleAdd=(e)=>{
  e.preventDefault();
  if(this.state.textInput.trim()){
  const test = {text: this.state.textInput, id:Date.now()}
  this.setState({todo: [...this.state.todo, test]})
  this.setState({textInput : ''})
  } else{
    alert('could you please put your to do again')
  }
}

    return (
      <div className='App container'>
        <form className='form' onSubmit={this.state.textInput}>
        <h1 className='container'>To Do List</h1>
          <input value={this.state.textInput} onChange={(e)=>handleSubmit(e)} type='text' />
            <button onClick={handleAdd} className='btn-primary'>Add</button>
        </form>
        {this.state.todo.map(el=> 
          <div className='todo mt-3' key={el.id} >
          <div className='mt-3 ml-3'>
            <p className={el.isComplete ? 'done' : ''}>{el.text}</p>
          </div>
          <div className='mr-2'>
            <button onClick={()=>handleDelete(el.id)} className='btn-danger'>Delete</button>
            <button onClick={()=>handleComplete(el.id)} className='btn-secondary'> {!el.isComplete ? 'Complete' : 'Undo'} </button>
          </div>
        </div>
          )}
        
        
      </div>
    )
  }
}

export default App