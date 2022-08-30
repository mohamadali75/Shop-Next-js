
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 0,ids:[],posts:[],auth:false,user:{email:"",password:""},coockie:[],name:"",
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
      state.ids.push(action.payload)
      
    },
    decrement: (state,action) =>{ if (state.value!=0){
      state.value -= 1
      const index = state.ids.indexOf(action.payload);

      state.ids.splice(index, 1); }


    },
    setPost: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.posts=action.payload
      },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    Login:(state) =>{

        state.auth=true
    },
    LogOut:(state)=>{
        state.auth=false
    },
    setUser:(state,action)=>{
        state.user=action.payload

    },
    setPass:(state,action)=>{
        state.name=action.payload

    },
    
    sCookie:(state,action)=>{
        state.coockie=action.payload
    }
  },
})
export default counterSlice;
export const { increment, decrement, incrementByAmount,setPost,LogOut,Login,setUser,setPass,sCookie } = counterSlice.actions
