import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

// let dialogs = [
//     <DialogItem name = {dialogsData[0].name} id= {dialogsData[0].id}/>,
//     ..... и тд
// ]

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

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

                {messagesElements}
                {/*<Message message={messagesData[0].message}/>*/}
                {/* и т.д. такие же єлементы*/}
            </div>
        </div>
    )
}

export default Dialogs;