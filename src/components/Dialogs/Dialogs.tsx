import React from 'react';
import s   from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

 export const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog}>
                        <NavLink to="/dialog1"> Dimych</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialog2"> Lisa</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialog3"> Tommy</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialog4"> Grisha</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialog5"> Masha</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialog6"> Kira</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How is you IT?</div>
                    <div className={s.message}>Yo</div>
                </div>
            </div>
        </div>
    );
};

