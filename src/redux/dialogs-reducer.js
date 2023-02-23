import state from "./store";
import profileReducer from "./profile-reducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'; //создали новую константу для добавления нового действия
const SEND_MESSAGE = 'SEND-MESSAGE'; //создали новую константу для добавления нового действия

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = ''; //занулили что написано
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;

    }
    //
    // if (action.type === UPDATE_NEW_MESSAGE_BODY) { //пользователь вводит сообщение и говорит чтобы его отправили
    //     state.newMessageBody = action.body; //изменили стейт
    //     // this._callSubscriber(this._state)   // удалили т.к. никого не уведомляем. см пройфайл редюсеп
    //     // сообщаем внешнему миру, что стейт изменился через метод, которому передаем єтот изменившийся стейт
    // } else if (action.type === SEND_MESSAGE) {
    //     let body = state.newMessageBody;
    //     state.newMessageBody = ''; //занулили что написано
    //     state.messages.push({id: 6, message: body});
    //     // this._callSubscriber(this._state)// удалили т.к. никого не уведомляем. см пройфайл редюсеп
    // }
    // return state;
}

//перенесли с store.js
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;