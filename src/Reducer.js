

const initialState = {
    todo: [
        { description: 'learn react props', id: 0, isDone: true, Edit: true },
        { description: 'Learn react state', id: 1, isDone: false, Edit: true },
        { description: 'Learn react hooks', id: 2, isDone: false, Edit: true },
        { description: 'Learn react rooter', id: 3, isDone: false, Edit: true },
    ],
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                todo: [...state.todo, action.payload]
            }
        case 'edit':
            return {
                todo: action.edit  // action.edit ?????
            }

        case 'ADD_TEXT':
            return {
                todo: action.payload
            }
        case 'Done':
            return {
                todo: state.todo.map(el=> el.id === action.payload ? {...el , isDone : !el.isDone}: el)
            }

        case 'NotDone':
            return {
                todo : action.payload
            }
        default: return state
    }
}

export default Reducer