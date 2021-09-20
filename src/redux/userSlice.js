 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initializeUser } from "../api/users";
import { createToken } from "../firebase";

// const verifyIdToken = createAsyncThunk(
  //   "user/verifyIdToken",
    // async(token) =>{
      //   const res = await verifyToken(token);
        // return res.data;
    // }
// )
export const verifyUser = createAsyncThunk(
     "user/verifyUser",
     async(user, thunkAPI) =>{
         const header = await createToken()
         try{
             const res = await initializeUser(user, header);
             return res.data;
         }catch(error){
            console.log(error);
         }
     }
 )

 export const userSlice = createSlice({
     name: "user",
     initialState:{
         user:null,
         likes: [],
         dislikes:[],
         events:[],
         loading:false,
     },
     reducers:{
         login: (state, action) =>{
             state.user = action.payload;
         },
         logout: (state)=>{
             state.user = null;
         },
         addEvent: (state, action)=>{
            state.events.push(action.payload);
         },
         addLike: (state, action)=>{
             state.likes.push(action.payload);
         },
         addDislike: (state, action)=>{
             state.dislikes.push(action.payload);
         }
     },
     extraReducers: {
         [verifyUser.pending]: (state) =>{
             state.loading = true
         },
         [verifyUser.verified]: (state, { payload }) =>{
             state.loading = false
             console.log(payload)
         },
         [verifyUser.rejected]: (state) =>{
             state.loading = false
         },
     },
 });

export const { login, logout, addEvent, addLike, addDislike } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
