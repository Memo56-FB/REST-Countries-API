import React from 'react'
import "./styles/PageLoad.scss"
import pacman from '../img/loader.svg'

export default function PageLoad() {
    return (
        <div className="preloader">
            <img src={pacman} alt="Loading"/>
        </div>
    )
}
