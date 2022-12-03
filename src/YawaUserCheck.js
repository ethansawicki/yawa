import React from 'react'
import { YawaLoggedIn } from './components/YawaLoggedInView'
import { YawaVisitorView } from './YawaVisitorView'

export const YawaUserCheck = () => {
    const userStorage = localStorage.getItem('capstone_user')
    const userObj = JSON.parse(userStorage)

    if(userObj) {
        return  <YawaLoggedIn />
    } else {
        return <YawaVisitorView />
    }
}
