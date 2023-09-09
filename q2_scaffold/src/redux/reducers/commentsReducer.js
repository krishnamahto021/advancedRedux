const { createSlice } = require("@reduxjs/toolkit");

// import redux toolkit methods here
const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// define comments reducer function here
const commentsSlice = createSlice({
    name:'comment',
    initialState:INITIAL_STATE,
    reducers:{
        setInitialState:(state,action)=>{
            state.comments = action.payload
        },
        fetchError:(state,action)=>{
            state.error = action.payload;
        },
        setIsLoading:(state,action)=>{
            state.isLoading = action.payload;
        }
    }
})

// export the comments reducer function and action creators here
export const commentsReducer = commentsSlice.reducer; 
export const {setInitialState,fetchError,setIsLoading} = commentsSlice.actions;


// export the comments selector function here
export const commentsSelector = (state)=>state.commentsReducer;
