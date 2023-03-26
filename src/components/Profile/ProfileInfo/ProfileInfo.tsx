import React from 'react';
import s from "../../MyPosts/MyPosts.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.tree}
                     src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                Ava+ description
            </div>
        </div>

    )

}

export default ProfileInfo;