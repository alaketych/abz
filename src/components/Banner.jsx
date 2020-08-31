import React from 'react'
import { Button } from './_index'

export default function Banner({ title, description }) {
    return (
        <div className="banner">
            <div className="wrapper">
                <h3 className="title big-letters white">
                    { title }
                </h3>

                <h3 className="description white">
                    { description }
                </h3>

                <Button label="Sign up now"
                        className="red-background"/>
            </div>
        </div>
    )
}