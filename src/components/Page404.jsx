import React from 'react'
import img404 from '../img/404-img.svg'
import './styles/Page404.scss'

export default function Page404() {
    return (
        <main className="container-404">
            <img className="img404" src={img404} alt="Error 404" />
        </main>
    )
}
