import { useReducer, useEffect } from "react"
import { todoReducer } from "./todoReducer"


// inicializa el localStorage con lo guerdado en el despues de recargar
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleNewtodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {

        dispatch({
            type: '[TODO] Delete Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    
    return {
        todos,
        handleDeleteTodo, 
        handleNewtodo, 
        handleToggleTodo, 
        todosCount: todos.length, 
        todosPending: todos.filter(todo => !todo.done).length
    }
}