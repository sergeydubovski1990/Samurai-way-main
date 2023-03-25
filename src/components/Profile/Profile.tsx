import React from 'react';
import s from "../MyPosts/MyPosts.module.css";
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.tree}
                     src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                     alt=""/>
            </div>
            <div>
                Ava+ description
            </div>
            <MyPosts />
        </div>

    );
};

export default Profile;