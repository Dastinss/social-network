import {rerenderEnrireTree} from "../render";

let state = {
    profilePage: {

        posts: [
            {id: 1, message: "Hello! How are you?", likesCount: 0},
            {id: 2, message: "It's my first post", likesCount: 20},
            {id: 3, message: "BlaBla", likesCount: 11},
            {id: 4, message: "DaDa", likesCount: 31},
        ],
        newPostText: 'it-kamasutra.com' // вводим по умолчанию в textarea - типа хардкодим ее (урок 34)
    },

    dialogsPage: {

        dialogs: [
            {id: 1, name: 'Misha'},
            {id: 2, name: 'Anya'},
            {id: 3, name: 'Mama'},
            {id: 4, name: 'Kolya'},
            {id: 5, name: 'Slava'},
            {id: 6, name: 'Bogdana'}
        ],
        messages: [
            {id: 1, message: 'Hello!!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Not bad'}
        ]
    }
}

export let addPost = (postMessage) => {   //выносим процесс добавления новых постов в MyPost texteria сюда, т.е. в BLL
    debugger;
    let newPost = {
        id: 5,
        message: postMessage, // переменная postMessage придет к нам из компоненты из поля техтєриа, мы еще не знаем чему она будет равна
        likelikesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEnrireTree(state);
} // добавили rerenderEnrireTree для того, чтобі перерисовавыть все дерево после добавления поста, т.к. иначе новый пост не появляется. Вутрь єто ф-ции закинули state для передачи данніх в render.jx

export default state;
