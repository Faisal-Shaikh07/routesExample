import { ADD_TASK, DELETE_TASK, LOGIN_DATA } from "./constant"

export const addTask = (task) =>{
    console.log('action called',task)
    return {
        type:ADD_TASK,
        task:task,
    }
}

export const deleteTask = (task) =>{
    return{
        type:DELETE_TASK,
        task:task
    }
}

export const addLoginData = (data) => {
    return{
        type: LOGIN_DATA,
        data,
    }
}