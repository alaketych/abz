import React from 'react'
import classNames from 'classnames'

export default function Button({ label, className }) {
    return (
    <button className={classNames('button', className)}>{ label }</button>
    )
}