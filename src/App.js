import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import state from "./redux/store";
import store from "./redux/store";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs"
                               element={<Dialogs store= {props.store} />}/>
                        <Route path="/profile"
                               element={<Profile
                                   profilePage={props.state.profilePage}
                                   // addPost={props.addPost}
                                   // updateNewPostText={props.updateNewPostText}/>}/>

                                    //заменили закоменченные выше два метода на один dispatch
                                   dispatch={props.dispatch}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;