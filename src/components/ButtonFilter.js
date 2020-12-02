import React from 'react'
import '../Style.css'

const ButtonFilter=({todo,dispatch})=>{
    const filterByDone=()=>{
        const filterDone = todo.filter(todo=>todo.isDone == true)
        return filterDone
    }

    const action1=(x)=>{
        dispatch ({
            type:'Done',
            payload:x ,
        })
        
    }

    const filterByNotDone=()=>{
        const filterNotDone = todo.filter(todo=>todo.isDone == false)
        return filterNotDone
    }

    const action2=(x)=>{
        dispatch({
            type:'NotDone',
            payload:x
        })
    } 
    return(
        <div className='App mt-5'>
            <button className='mr-3' onClick={()=>action1(filterByDone())}>Filter tasks done</button>
            <button onClick={()=>action2(filterByNotDone())}>Filter tasks not done</button>
        </div>
    )
}

export default ButtonFilter
