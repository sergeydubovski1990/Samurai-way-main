import React from 'react';
import s from "../MyPosts.module.css";
import {message} from "antd";

type PostType = {
    message: string
    likes?: number
}
const Post = (props: PostType) => {
    const message = props.message
    const likesCounter = props.likes
    return (
        <div className={s.item}>
            <img src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png" alt=""/>
            {message}
            <div>
                <button>{likesCounter } Likes</button>
            </div>

        </div>
    )
};
export default Post;