import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {message} from "antd";

type DialogsItemType = {
    name: string
    id: number
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
    let DialogsData = [
        {id:1, name:'Dimych'},
        {id:2, name:'Lisa'},
        {id:3, name:'Tommy'},
        {id:4, name:'Masha'},
        {id:5, name:'Masha'},
        {id:6, name:'Anna'}
    ]

    let MessagesData = [
        {id:1, message:'Hi'},
        {id:2, message:'Lox'},
        {id:3, message:'Ya ne bydu celovat'},
        {id:4, message:'Chto novogo?'},
        {id:5, message:'vot on ya'},
        {id:6, message:'bull'}
    ]

    let dialogEl = DialogsData.map(m=><DialogsItem name={m.name} id={m.id}/>)
    let messEl = MessagesData.map(m=><Message messageeee={m.message} />)
    const newMessage = React.useRef<HTMLTextAreaElement>(null);
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogEl}
                </div>
                <div className={s.messages}>
                    {messEl}
                </div>
                <div><textarea ref={newMessage} ></textarea></div>
                <div> <button>+</button></div>

            </div>
        </div>
    );
};

export default Dialogs;