import { FETCH_ALL, CREATE } from "../constants/actionTypes";

import * as api from "../api/users.js";

export const getUsers = () => async (dispatch) =>{
    try {
        const { data } = await api.fetchUsers();
        dispatch({ type: FETCH_ALL, payload: data});
    } catch(error){
        console.log(error.message);
    }
};

export const createUser = (user) => async (dispatch) =>{
    try{
        const { data } = await api.createUser(user);
        dispatch({ type: CREATE, payload: data });
    }catch(error){
        console.log(error.message);
    }
};