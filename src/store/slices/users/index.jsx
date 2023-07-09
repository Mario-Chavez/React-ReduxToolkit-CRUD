import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

const initialState = {
    id: "150",
    email: "mario@gmail.com",
    first_name: "mario alberto",
    last_name: "chavez",
    avatar: "avatar...dhghdgd....",
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
    },
});

// exportamos para que lo pueda usar el configStore
export const userSliceReducer = userSlice.reducer;
// extraemos el setUser para ser usado en el fetchAllUsers
export const { setUserList } = userSlice.actions;

// Reducers y acciones del slice addUser
export const addUserReducer = addUserSlice.reducer;
export const { setUser } = addUserSlice.actions;

// se usa dispatch para poder setear en el slice
export const fetchAllUser = () => (dispatch) => {
    axios
        .get("https://reqres.in/api/users?per_page=12")
        .then((respuesta) => {
            dispatch(setUserList(respuesta.data.data));
        })
        .catch((error) => console.log(error));
};
