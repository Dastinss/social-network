import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

// let dialogs = [
//     <DialogItem name = {dialogsData[0].name} id= {dialogsData[0].id}/>,
//     ..... и тд
// ]

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage; // забрали весь стейт (в отличие от Profile куда передали только Dispatch) в уроке 40 после чего удалили props ниже

    // let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    // let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    // let newMessageBody = props.state.newMessageBody; //отображаем внутри value, но чтобы он менялся, т.е. приходил другой, крепим событие onChange

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

                {/*<DialogItem name = {dialogsData[0].name} id= {dialogsData[0].id}/>*/}
                {/* и т.д. такие же єлементы*/}

                {/*<DialogItem name="Misha" id="1"/>*/}
                {/* и т.д. такие же єлементы*/}
            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
                {/*<Message message={messagesData[0].message}/>*/}
                {/* и т.д. такие же єлементы*/}
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;