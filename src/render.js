import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost} from "./redux/state";

// все что ниже перенесли из index.js и возвращаем туда в виде ф-ции rerenderEnrireTree для того ,чтобы перерисвывать каждый раз все дерево и не было циклической ссылки (см. уроу № 33. Уроки React JS)

export let rerenderEnrireTree = (state) => {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} addPost={addPost}/>
  </React.StrictMode>
);
}

// <App state={state} addPost={(message)=>{alert('Hi, I am only dump componennt' + message)}}/>