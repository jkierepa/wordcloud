import React from 'react'
import { IconContext } from 'react-icons'
import { useHistory } from 'react-router'

import logout from '@store/actions/logout'

import LogoutButton from '@components/LogoutButton/LogoutButton'


const LogoutButtonContainer = (): React.ReactElement => {
    const history = useHistory()

    const handleLogoutClick = () => {
        logout()
        history.replace('/')
    }

    return (
    <IconContext.Provider value={{ color: getComputedStyle(document.documentElement).getPropertyValue('--primary-color'), size: "4em" }}>
        <LogoutButton onLogoutClick={() => handleLogoutClick()}/>
    </IconContext.Provider>
    )
}


export default LogoutButtonContainer