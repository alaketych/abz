import React from 'react'

export default function Nav({ items }) {
    return (
        <ul className="navigation">
            {
                items.map((link, index) => (
                    <li className="navigation__item"
                        key={ index }
                    >
                        <a href="/" className="link">{ link }</a>
                    </li>
                ))
            }
        </ul>
    )
}