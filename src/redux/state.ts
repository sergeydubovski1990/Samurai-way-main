import React from 'react';

type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
    post: PostType[]
}

type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


const state: RootStateType = {
    profilePage: {
        post: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'By', likesCount: 1},
            {id: 3, message: 'Я не буду целовать холодный труп', likesCount: 1},
            {id: 4, message: 'Лиза, ты тут?', likesCount: 100}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Lisa'},
            {id: 3, name: 'Tommy'},
            {id: 4, name: 'Masha'},
            {id: 5, name: 'Masha'},
            {id: 6, name: 'Anna'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Lox'},
            {id: 3, message: 'Ya ne bydu celovat'},
            {id: 4, message: 'Chto novogo?'},
            {id: 5, message: 'vot on ya'},
            {id: 6, message: 'bull'}
        ]
    },
    sidebar: {}
}