import React from "react"
import classNames from 'classnames'

export default function Block({ children, className, title, pseudoDescription }) {
    return (
        <section className={classNames('block centered', className)}>
            <div className="wrapper">
                <h3 className="title centered">{ title }</h3>
                <h3 className="pseudo-description">{ pseudoDescription }</h3>

                { children }
            </div>
        </section>
    )
}