import React from 'react'
import { Field } from 'formik'

export default function RadioButton({ options }) {
    return (
        <Field component="div">
            {
                options.map((option, index) => {
                    return (
                        <div className="radio" key={ index }>
                            <input
                                type="radio"
                                id={ option.id }
                                value={ option.value }
                            />
                            <label htmlFor={option.id}>{option.key}</label>
                        </div>
                    )
                })
            }
        </Field>
    )
}