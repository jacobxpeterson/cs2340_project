import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { useState, useEffect } from "react";

const LoginForm = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        firstName: Yup.string().trim().required(),
        lastName: Yup.string().trim().required(),
    });

    const initialValues = {
        firstName: "",
        lastName: "",
    };

    const onSubmit = (values) => {
        localStorage.setItem("userName", JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName
        }));
        navigate('/eventList');
    };

    
    const renderError = (message) => <p className="help is-danger">{message}</p>;
    

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            <Form>
                <div
                    className="container"
                    style={{
                        width: "60%",
                    }}
                >
                    <div className="field">
                        <label className="label" htmlFor="firstName">
                            First Name
                        </label>
                        <div className="control">
                            <Field
                                name="firstName"
                                type="text"
                                className="input"
                                placeHolder="First Name"
                            />
                            <ErrorMessage name="firstName" render={renderError} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="lastName">
                            Last Name
                        </label>
                        <div className="control">
                            <Field
                                name="lastName"
                                type="text"
                                className="input"
                                placeHolder="Last Name"
                            />
                            <ErrorMessage name="lastName" render={renderError} />
                        </div>
                    </div>
                    <button type="submit" className="button is-primary">
                        Submit
                    </button>
                </div>
            </Form>
        </Formik>
    );
};

export default LoginForm;
