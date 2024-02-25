import { useEffect, useReducer } from "react"
import { todoReducer } from "../todoReducer"

export const useTodo = () => {
    const initialState = []

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }
    // el reducer pide 3 argumentos: (el reducer), (el estado inicial), (para obtener los elementos del LocalStorage) - el 3ro casi no se suele usar
    const [todos, dispatch] = useReducer(
        todoReducer, 
        initialState, 
        init
    )

    const todosCount = todos.length
    const pendingTodosCount = todos.filter(todo => !todo.done).length

    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo 
        }

        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'Delete Todo',
            payload: id
        }

        dispatch(action)
    }

    const handleCompleteTodo = (id) => {
        const action = {
            type: 'Complete Todo',
            payload: id
        }

        dispatch(action)
    }

    const handleUpdateTodo = (id, description) => {
        const action = {
            type: 'Update Todo',
            payload: {
                id,
                description
            }
        }

        dispatch(action)
    }

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo, 
        handleDeleteTodo, 
        handleCompleteTodo, 
        handleUpdateTodo
    }
}