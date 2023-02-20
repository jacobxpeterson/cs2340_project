import { Field, Formik, Form, ErrorMessage } from "formik";
import React, {useState, useEffect, roles} from "react";
import * as Yup from "yup";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import axios from "axios";



const UserInputForm = () => {
    const USER_API_BASE_URL = "http://localhost:8081/api/v1/users";
    const navigate = useNavigate();
    
    const roles = ["Student", "Administrator", "Alumni"]

    const [user, setUser] = useState( {
        id: "",
        firstName: "",
        lastName: "",
        role: "Student",
    });


    const validationSchema = Yup.object({
        role: Yup.string().required("Please select your role").oneOf(roles),
        firstName: Yup.string().trim().required(),
        lastName: Yup.string().trim().required(),
    });

    const initialValues = {
        firstName: "",
        lastName: "",
        role: "",
    };

    const onSubmit = (values) => {
        axios.post(USER_API_BASE_URL, values);
        localStorage.setItem("userName", JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName
        })); 
        navigate('/eventList');
    };

    const roleOptions = roles.map((role, key) => (
        <option value={role} key={key}>
            {role}
        </option>
    ));
    
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
                                placeHolder = "First Name"
                                
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
                    <div className="field">
                        <label className="label" htmlFor="role">
                            Role
                        </label>
                        <div className="control">
                            <Field name="role" as="select" className="select is-fullwidth">
                                <option value={""}>Select a Role</option>
                                {roleOptions}
                            </Field>
                            <ErrorMessage name="role" render={renderError} />
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

export default UserInputForm;
