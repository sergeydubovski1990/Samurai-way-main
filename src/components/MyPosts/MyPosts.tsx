import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    const postData = [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'By', likesCount: 1},
        {id: 3, message: 'Я не буду целовать холодный труп', likesCount: 1},
        {id: 4, message: 'Лиза, ты тут?', likesCount: 100}
    ]

    const postsMaping = postData.map(p => <Post likes={p.likesCount} message={p.message}/>)

    const newPostEl = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
        alert(newPostEl.current?.value)
    const text = newPostEl.current?.value;
    }

    return (
        <div className={s.content}>
            <div>
                <h2>
                    My posts
                </h2>
            </div>
            <div>
                <div>
                 <textarea ref={newPostEl} name="" id=""></textarea>.
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsMaping}
            </div>
        </div>

    );
};

export default MyPosts;