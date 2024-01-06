import { ADD_TASK, DELETE_TASK, LOGIN_DATA } from "./constant";

const initialState = {
    task:[],
    loginData : {}
}

export const taskData = (state=initialState,action) => {
    switch(action.type){
        case ADD_TASK :
            return { task: [...state.task, action.task] };
        case DELETE_TASK:   
            let taskToRemove = action.task;
            const newTask = state.task.filter((task)=>{ return task !== taskToRemove});
            return{ task: [...newTask]}
        case LOGIN_DATA:{
            return{
                ...state,
                loginData : action.data 
            }
        }
        default :
            return state;
    }
}

