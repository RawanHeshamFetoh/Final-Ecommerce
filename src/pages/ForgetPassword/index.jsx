import React from "react";
import { Form, Formik } from "formik";
import FormController from "../../components/formConteoller/formController";
import * as Yup from "yup";
import styles from '../Login/login.module.css'
import ForgetPasswordImg from '../../assets/Forgot password-bro.svg'

const ForgetPassword = () => {
    const initialValues = {
        email: "",
    };
    const validationSchema = Yup.object({
        email: Yup.string()
            .required("required")
            .email("invalid email"),
    });
    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className={`container my-5  ${styles.formContainer}`}>
            <img src={ForgetPasswordImg} alt="login" />
            <div className={styles.login}>
                <h1>forget password </h1>
            
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                
            >
                {(formik) => {
                    return (
                        <Form className={styles.loginForm}>
                            <FormController
                                control="input"
                                type="email"
                                placeholder="Enter your email"
                                divStyle={styles.formControl}
                                name="email"
                                className={styles.input}
                            />
                            
                            <div className={styles.submitContainer}>
                                <button type="submit" className={styles.submit} disabled={!formik.isValid}>send to email</button>
                               
                            </div>
                            
                        </Form>
                    );
                }}
            </Formik>
            </div>
        </div>
    );
};

export default ForgetPassword;
