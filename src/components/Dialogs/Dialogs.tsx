import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    name: string
    id: string
}

type MessagePropsType = {
    messageeee: string
}
const DialogsItem = (props: DialogsItemType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessagePropsType)=> {
    let mess = props.messageeee
    return (
        <div>
            <div className={s.message}>{mess}</div>
        </div>
    )
}


const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogsItem name='Dimych' id='1'/>
                    <DialogsItem name='Lisa' id='2'/>
                    <DialogsItem name='Tommy' id='3'/>
                    <DialogsItem name='Grisha' id='4'/>
                    <DialogsItem name='Masha' id='5'/>
                    <DialogsItem name='Masha' id='6'/>
                </div>
                <div className={s.messages}>
                    <Message messageeee="Hi" />
                    <Message messageeee="Lox" />
                    <Message messageeee="Sam Lox" />
                </div>
            </div>
        </div>
    );
};

export default Dialogs;