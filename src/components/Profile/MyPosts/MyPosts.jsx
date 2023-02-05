import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    // let postsData = [
    //     {id: 1, message: "Hi! How are you?", likesCount: 0},
    //     {id: 2, message: "It's my first post", likesCount: 20},
    //     {id: 3, message: "BlaBla", likesCount: 11},
    //     {id: 4, message: "DaDa", likesCount: 31},
    // ]

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef() // єто нужно запомнить, т.е. это внутренняя примочка Реакта. Делаем ссылку на добавление в дальнейшем Поста из ТехтЭриа

    let addPost = () => {
        // let text = newPostElement.current.value; // удалили ,т.к. в addPost нет смысла добавлять этот текст, т.к. он все равно не на что не влияет (см.урок 34 29:24)
        // props.updateNewPostText(''); // перенесли зануление в state.js, тк єто бизнес функция
        // props.addPost();

        //заменили закоменченный выше метода на dispatch
        // props.dispatch( {type: 'ADD-POST'} );
        props.dispatch( addPostActionCreator())
    } // прокинули ф-цию addPost через props из state, т.е. фактически из BLL в наш UI

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // console.log(text)
        // props.updateNewPostText(text);

        //заменили закоменченный выше метод на dispatch
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text };
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

    return (
        //урок 32 добавили value в textarea и в нее из пропсов newPostText , которое нам приходит через вводимую строку в state.js, из которой в свою очередь попадает на єкран - это круговорот FLEX!
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
                {/*<Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>*/}
                {/*<Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>*/}

                {/*<Post message="It's my first post" likesCount=' 20'/>*/}

            </div>
        </div>
    )
}

export default MyPosts;