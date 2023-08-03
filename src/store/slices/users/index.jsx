import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

const initialState = {
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
};

// slice de users lista de usuario
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

// agregar un ususario nuevo
// Slice para agregar un nuevo usuario
export const addUserSlice = createSlice({
    name: "addUser",
    initialState: {
        user: initialState,
    },
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.avatar = action.payload.avatar;
        },
        unSetUser: (state) => {
            state.id = "";
            state.email = "";
            state.first_name = "";
            state.last_name = "";
            state.avatar = "";
        },
    },
});

// exportamos para que lo pueda usar el configStore
export const userSliceReducer = userSlice.reducer;
// extraemos el setUser para ser usado en el fetchAllUsers
export const { setUserList } = userSlice.actions;

// Reducers y acciones del slice addUser
export const addUserReducer = addUserSlice.reducer;
export const { setUser, unSetUser } = addUserSlice.actions;

// se usa dispatch para poder setear en el slice
export const fetchAllUser = () => (dispatch) => {
    axios
        .get("http://localhost:3000/user")
        .then((respuesta) => {
            // console.log(respuesta);
            dispatch(setUserList(respuesta.data));
        })
        .catch((error) => console.log(error));
};
