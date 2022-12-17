import React, { useEffect, useState } from 'react'
import { YawaLoggedIn } from './components/YawaLoggedInView'
import { YawaVisitorView } from './YawaVisitorView'

export const YawaUserCheck = () => {
    const userStorage = localStorage.getItem('capstone_user')
    const userObj = JSON.parse(userStorage)
    const [successfulLogIn, setSuccessfulLogIn] = useState(false)

    useEffect(
        () => {
            userObj ? setSuccessfulLogIn(true) : setSuccessfulLogIn(false)
        },
        []
    )

    if(userObj) {
        return  <YawaLoggedIn successfulLogIn={setSuccessfulLogIn}/>
    } else {
        return <YawaVisitorView successfulLogIn={setSuccessfulLogIn} />
    }
}
