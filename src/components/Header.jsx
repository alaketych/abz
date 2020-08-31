import React from 'react'
import { Nav } from './_index'
import logo from '../assets/images/logo.svg'

const navigationItems = ['About Me', 'Relationships', 'Requirements', 'Users', 'Sign Up']

export default function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="logo">
                    <a href="/" className="link">
                        <img src={ logo } alt="TESTTASK" />
                    </a>
                </div>

                <Nav items={ navigationItems }/>
            </div>
      </header>
    )
}