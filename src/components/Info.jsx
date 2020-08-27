import React from 'react'
import manLaptop from '../assets/images/man-laptop-v1.svg'

export default function Info({ children, subtitle, description }) {
    return (
        <div className="info">
            <div className="picture">
                <img src={ manLaptop } alt="man-laptop"/>
            </div>

            <div className="more">
                <div className="subtitle">{ subtitle }</div>

                <div className="description">
                    <p>{ description }</p>
                    <br />
                    <p>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3.</p>
                </div>

                { children }
            </div>
        </div>
    )
}