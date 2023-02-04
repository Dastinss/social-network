//lesson 37 упаковывем все ф-ции и все переменные запаковывем в один объект store - концепция ООП

let store = {  // у объекта  store есть св-во state, которое делаем приватным в объекте store
    _state: {

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
        },
        sidebar: {}
    },
    getState () {
      return this._state;
    },
    _callSubscriber() { //делаем методы из ф-ций удаляя let, стрелку и =
        console.log('State was changed'); // удалили файл рендер и перенесли все из него в индекс.жс
    },
    addPost() { //делаем методы из ф-ций удаляя let, стрелку и =. Ранее выносим процесс добавления новых постов в MyPost texteria сюда, т.е. в BLL
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText, // ранее была переменная postMessage которая приходила к нам из компоненты из поля техтєриа. потом заменили ее на
            likelikesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''; // перенесли зануление из MyPost.js, тк єто бизнес функция
        this._callSubscriber(this._state);
    }, // добавили callSubscriber для того, чтобі перерисовавыть все дерево после добавления поста, т.к. иначе новый пост не появляется. Вутрь єто ф-ции закинули state для передачи данніх в render.jx
    // добавляем т.к. этот метод не расчитан на внешнее использование

    updateNewPostText(newText) {   //выносим процесс добавления новых постов в MyPost texteria сюда, т.е. в BLL
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscriber(observer) {
        this._callSubscriber = observer; // // уведомляем како го то подписчика из вне - наблюдателя ). ранее -callSubscriber = observer: нельзя ни в коем случае приписывать ни let ни const ни var
    }
}


export default store; // ранее экспортировали state, а теперь экспортируем store
window.store = store; // ранее обращались глобально к state, а теперь обращаемя в store в случае надобности
// store OOP

