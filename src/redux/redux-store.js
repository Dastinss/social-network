import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let  reducers = combineReducers({ // это не один обькт, а по сути наш стейт
    profileReducer,
    dialogsReducer,
    sidebarReducer
});

let store = createStore();

export default store;