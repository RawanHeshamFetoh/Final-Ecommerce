import React from 'react'
import * as Yup from 'yup'
import styles from "../../pages/Login/login.module.css"
import resetPasswordImg from "../../assets/Reset password-bro.svg"
import { Form, Formik } from 'formik'
import FormController from '../formConteoller/formController'
import { Link } from 'react-router-dom'
import style from './resetPassword.module.css'
const ResetPasswordForgetted = () => {
    const initialValues = {
        email: "",
        newPassword: "",
        otp: ["", "", "", "", ""],
    };
    const validationSchema = Yup.object({
        email: Yup.string().email("invalid email").required("required"),
        newPassword: Yup.string()
            .required("required")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                "invalid password"
            ),
            otp: Yup.array().of(
                Yup.string()
                    .length(1, "Each digit must be 1 character")
                    .matches(/^[0-9]$/, "Must be a number")
                    .required("Required")
            ).length(5, "Must be exactly 5 digits"),

    });
    const onSubmit = (values) => {
        const otpString = values.otp.join('');
        const updatedValues = {
            ...values,  // Spread the existing values
            otp: otpString // Update the otp field with the string
        };
        console.log(updatedValues)

        // mutation.mutate(values);
    };
    // const arrayOfUndefined = new Array(5).fill(undefined);
    return (
        <div className={`container my-5  ${styles.formContainer}`}>

            <img src={resetPasswordImg} alt="login" />
            <div className={styles.login}>
                <h1>log in to exculsive </h1>

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
                                <FormController
                                    control="input"
                                    type="password"
                                    placeholder="Enter your password"
                                    name="newPassword"
                                    className={styles.input}
                                    divStyle={styles.formControl}
                                />
                                <label htmlFor="otp1" className={style.label}>otp</label>
                                <div className={style.otp}>
                                {
                                    initialValues.otp.map((value,index) => (
                                        <FormController
                                            control="input"
                                            type="text"
                                            id="otp1"
                                            name={`otp[${index}]`}
                                            className={styles.input}
                                            divStyle={styles.formControl}
                                        />
                                    ))}
                                </div>
                                {/* <FormController
                                    control="input"
                                    type="text"
                                    placeholder="Enter your otp"
                                    divStyle={styles.formControl}
                                    name="otp"
                                    className={styles.input}
                                /> */}

                                <div className={styles.submitContainer}>
                                    <button type="submit" className={styles.submit} disabled={!formik.isValid}>login</button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>

            </div>
        </div>
    )
}

export default ResetPasswordForgetted

