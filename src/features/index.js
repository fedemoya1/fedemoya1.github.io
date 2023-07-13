import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "lang",
    initialState:{value: false},
    reducers:{
        changeLang: (state) =>{
            state.value = !state.value;
        },
    },
})

export const { changeLang } = langSlice.actions;

export default langSlice.reducer;