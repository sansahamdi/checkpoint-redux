import React from 'react'
import Task from './Task'
import {connect} from 'react-redux'
import ButtonFilter from './ButtonFilter'

const TodoList=({todo,dispatch})=>{
    return(
        <div>
            {todo.map(el=> <Task key={el.id} el={el} />)}
            <ButtonFilter todo={todo} dispatch={dispatch} />
        </div>
    )

}

const mapStateToProps=(state)=>{
    return({
        todo: state.todo
    })
}

export default connect(mapStateToProps)(TodoList)