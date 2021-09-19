import React from 'react'
import {BsBoxArrowLeft} from 'react-icons/bs'

import Button from '@components/Button/Button'

import { LogoutButtonProps } from '@appTypes/propTypes'

import styles from './LogoutButton.module.css'
import { IconContext } from 'react-icons'

const LogoutButton = ({onLogoutClick}: LogoutButtonProps): React.ReactElement => {
    return (
        <IconContext.Provider value={{ color: getComputedStyle(document.documentElement).getPropertyValue('--primary-color'), size: "4em" }}>
            <div className={styles.container}>
                <Button onClick={() => onLogoutClick()} customStyle={styles.logoutButton}>
                    <BsBoxArrowLeft />
                </Button>
            </div>
        </IconContext.Provider>
    )
}
export default LogoutButton

