const { createSlice } = require("@reduxjs/toolkit");



const authSlice = createSlice({
    name:'authSlice',
    initialState:{
        openLogin:false,
        openSignup:false,
        otpOpen:false,
    },
    reducers:{
        openLoginModel(state,action){
            state.openLogin = action.payload;
        },
        otpModal(state,action){
            state.otpOpen = action.payload;
        },
    }
})

export const {openLoginModel, otpModal} =  authSlice.actions;
export default authSlice.reducer;