import React from 'react'
import SwitchTheme from '../theme/SwitchTheme'
import './styles/Header.scss'
export default function Header() {
    return (
        <header>
            <h2>Where in the world</h2>
            <SwitchTheme/>  
        </header>
    )
}
