import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {subscriber} from "./redux/state";
import './index.css';
import {addPost, updateNewPostText} from "./redux/state";

// все что ниже перенесли из index.js и возвращаем туда в виде ф-ции rerenderEnrireTree для того ,чтобы перерисвывать каждый раз все дерево и не было циклической ссылки (см. уроу № 33. Уроки React JS)
// до 35 урока было все в отдельном файле render.js, после чего перенесли все в index.js (точнее вернули все туда)

const root = ReactDOM.createRoot(document.getElementById('root')); // ВОТ ЭТА СТРОКА - ее скопировал с каментов с урока 34, т.к. біла ошибка изза обновления
let rerenderEnrireTree = (state) =>{

    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );}

// <App state={state} addPost={(message)=>{alert('Hi, I am only dump componennt' + message)}}/>


rerenderEnrireTree (state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

subscriber(rerenderEnrireTree);
