import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

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
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = ' ';
    } // прокинули ф-цию addPost через props из state, т.е. фактически из BLL в наш UI

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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