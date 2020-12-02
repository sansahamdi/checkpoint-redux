import React, {useState} from 'react'
import { connect } from 'react-redux'

const TodoAdd = ({dispatch}) => {

    const [input, setInput]= useState('')

    const handleAdd=(text)=>{
        dispatch({
            type: 'ADD',
            payload: text
        })
    }
    return (
        <form className='form' onSubmit={(e)=>{
            e.preventDefault();
            handleAdd({id:Date.now(), description:input,isDone:false, Edit:true});
            setInput('')
        }}>
            <h1 className='container'>To Do List</h1>
            <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' />
            <button className='btn-primary'>Add</button>
        </form>
    )
}
        const mapStateToProps=(state)=>{
            return({
                todo: state.todo
            })
        }

export default connect(mapStateToProps)(TodoAdd)