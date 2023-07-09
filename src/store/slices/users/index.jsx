import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

// slice de users
export const userSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
    },
    reducers: {
        setUserList: (state, action) => {
            state.list = action.payload;
        },
    },
});

// extraemos el setUser para ser usado en el fetchAllUsers
export const { setUserList } = userSlice.actions;

// exportamos para que lo pueda usar el configStore
export default userSlice.reducer;

// se usa dispatch para poder setear en el slice
export const fetchAllUser = () => (dispatch) => {
    axios
        .get("https://reqres.in/api/users?per_page=12")
        .then((respuesta) => {
            dispatch(setUserList(respuesta.data.data));
        })
        .catch((error) => console.log(error));
};
