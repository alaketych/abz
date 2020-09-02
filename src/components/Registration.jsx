import React from 'react'
import RadioButton from './RadioButton'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const specialization  = [
    {key: 'Frontend developer', value: 'Frontend'},
    {key: 'Backend developer',  value: 'Backend' },
    {key: 'Designer',           value: 'Designer'},
    {key: 'QA',                 value: 'QA'      },
]

const SignUpSchema = Yup.object().shape({
    name: Yup.string()
            .min(2, 'Name should have at least 2 symbols')
            .max(60, 'Name must not exceed more than 60 symbols')
            .required('Required to fill'),

    email: Yup.string()
            .email('Please enter a valid email address')
            .required('Required to fill'),

    phone: Yup.number()
            .min(8, 'Phone number has at least 8 digits')
            .required('Required to fill')
            .positive()
            .integer(),

    radio: Yup.string()
            .required('You have to choose one of position')
})

export default function Registration() {
    return (
        <Formik
            initialValues={{
                name : '',
                email: '',
                phone: '',
                radio: '',
                file: '',
            }}

            validationSchema={ SignUpSchema }

            onSubmit = {(values, { setSubmitting }) => {(
                setTimeout(() => {
                    console.log('Putted: ', values)
                }, 500))
            }}
        >
            {
                ({ values, touched, errors,
                    handleBlur, isSubmitting,
                    handleChange, handleSubmit }) => (
                        <Form autoComplete="off" onSubmit={ handleSubmit }>
                            <label htmlFor="name">Name</label>
                            <Field id="name" value={ values.name }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    className={errors.name && touched.name && "error"}
                                    name="name" placeholder="Your name" />

                                    {
                                        errors.name && touched.name && (
                                            <div className="input-feedback">
                                                {errors.name}
                                            </div>
                                        )
                                    }

                            <label htmlFor="email">Email</label>
                            <Field id="email" value={ values.email }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    className={errors.email && touched.email && "error"}
                                    name="email" type="email" placeholder="Your email" />

                                    {
                                        errors.email && touched.email && (
                                            <div className="input-feedback">
                                                {errors.email}
                                            </div>
                                        )
                                    }

                            <label htmlFor="phone">Phone</label>
                            <Field id="phone" value={ values.phone }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    className={errors.phone && touched.phone && "error"}
                                    name="phone" placeholder="+380 XX XXX XX XX" />

                                    {
                                        errors.phone && touched.phone && (
                                            <div className="input-feedback">
                                                {errors.phone}
                                            </div>
                                        )
                                    }

                            <label htmlFor="position">Select your position</label>
                            <RadioButton options={ specialization } />

                            <label htmlFor="upload">Photo</label>

                            <Field type="file" name="file"
                                    className="file-input"
                                    onChange={ handleChange} />

                            <button type="submit"
                                    className="button red-background"
                                    >Sign up now</button>
                        </Form>
                )
            }

        </Formik>
    )
}