import React from 'react';

type MessagesType = {
    id: number,
    message: string
}

type DialogsType = {
    id: number,
    name: string
}

type PostsType = {
    id: number,
    message: string,
    likeCount: number
}

type ProfilePageType = {
    posts: Array<PostsType>
}

type DialogsPageType = {
    posts: Array<MessagesType>
    messages: Array<DialogsType>
}

type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 12},
            {id: 2, message: 'It\'s my first post', likeCount: 11},
            {id: 3, message: 'Blabla', likeCount: 15},
            {id: 4, message: 'Dada', likeCount: 19},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 1, name: 'Andrey'},
            {id: 1, name: 'Sveta'},
            {id: 1, name: 'Sasha'},
            {id: 1, name: 'Viktor'},
            {id: 1, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 1, message: 'How is your it-kamasutra'},
            {id: 1, message: 'Yo'},
            {id: 1, message: 'Yo'},
            {id: 1, message: 'Yo'},
        ]
    },
    sidebar: {}
}