import React from 'react'
import {connect} from 'react-redux'

const EditTask=({todo,id,dispatch,edit})=>{
    const editTask=()=>{
        const test=todo.map(el=>{
            return el.id==id ? {...el, Edit: !el.Edit} : el
        })
        return test
    }

    const handleEdit=(X)=>{
        dispatch({
            type:'edit',
            edit:X      
        })
    }
    return(
        <div>
            <button onClick={()=>handleEdit(editTask())} className='btn-danger'> {edit ? 'Edit' : 'Not' } </button>
        </div>
        
    )
}
const mapStateToProps=(state)=>{
    return({
        todo: state.todo
    })
  }

export default connect(mapStateToProps)(EditTask)