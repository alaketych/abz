import React from 'react'
import logo from '../assets/images/logo.svg'

export default function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="logo">
                    <a href="/" className="link">
                    <img src={ logo } alt="TESTTASK" />
                    </a>
                </div>

                <ul className="navigation">
                    <li className="navigation__item">
                    <a href="/" className="link">About me</a>
                    </li>
                    <li className="navigation__item">
                    <a href="/" className="link">Relationships</a>
                    </li>
                    <li className="navigation__item">
                    <a href="/" className="link">Requirements</a>
                    </li>
                    <li className="navigation__item">
                    <a href="/" className="link">Users</a>
                    </li>
                    <li className="navigation__item">
                    <a href="/" className="link">Sign Up</a>
                    </li>
                </ul>
            </div>
      </header>
    )
}