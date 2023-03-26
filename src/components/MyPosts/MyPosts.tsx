import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                <h2>
                    My posts
                </h2>
            </div>
            <div>
                <div>
                    <textarea name="" id=""></textarea>
                </div>

                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post likes={1} message='Hi'/>
                <Post likes={21} message={'By'}/>
                <Post likes={17} message={'Hallow'}/>
                <Post likes={22} message={'Я не буду целовать холодных рук'}/>

            </div>
        </div>

    );
};

export default MyPosts;