import React from 'react'
import { Button } from './index'

export default function Banner() {
    return (
        <div className="banner">
            <div className="wrapper">
                <h3 className="title big-letters white">
                    Test assignment for Frontend Developer position
                </h3>

                <h3 className="description white">
                    We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens
                </h3>

                <Button label="Sign up now"
                        className="red-background"/>
            </div>
        </div>
    )
}