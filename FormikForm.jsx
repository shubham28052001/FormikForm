import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup"
export default function FormikForm() {
    return (
        <Formik initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            education: "",
            confirmpassword: "",
            gender: "",
            skills: [],
            agree: false
        }}

        validationSchema={yup.object({
            firstname:yup.string().min(4,"upto 4").required("firstname is required"),
            lastname:yup.string().min(4,"upto 4").required("lastname is required"),
            email:yup.string().required("email is required"),
            password:yup.string().min(6,"upto 6").required("password is required"),
            education:yup.string().required("Education is required"),
            confirmpassword:yup.string().oneOf([yup.ref("password"),"password not match"]).required("confirm is required"),
            gender:yup.string().required("geneder is required"),
            skills:yup.array().min(1,"please select atleast one"),
            agree:yup.boolean().oneOf([true],"Accept terms")
        })}



            // validate={(values) => {
            //     const error = {};

            //     if (!values.firstname) {
            //         error.firstname = "Firstname is required"
            //     } else if (values.firstname.length < 4) {
            //         error.firstname = "Firstname must be grester than 4 character"
            //     }

            //     if (!values.lastname) {
            //         error.lastname = "Lastname is required"
            //     }

            //     if (!values.email) {
            //         error.email = "Email is Required"
            //     }
            //     if (!values.password) {
            //         error.password = "password is required"
            //     }
            //     if (values.confirmpassword !== values.password) {
            //         error.confirmpassword = "password does not match"
            //     }
            //     if (!values.education) {
            //         error.education = "Education is required";
            //     }

            //     if (!values.gender) {
            //         error.gender = "gender is required"
            //     }
            //     if (values.skills.length === 0) {
            //         error.skills = "please Select atleast one skill"
            //     }
            //     if (!values.agree) {
            //         error.agree = "please tick terms";
            //     }
            //     return error;
            // }}

            onSubmit={async (values) => {
                console.log(values);
            }}
        >
            <Form>
                <Field name="firstname" placeholder="First Name" />
                <ErrorMessage name='firstname'></ErrorMessage>
                <br /><br />

                <Field name="lastname" placeholder="Last Name" />
                <ErrorMessage name='lastname'></ErrorMessage>
                <br /><br />
                <Field name="email" placeholder="Email" />
                <ErrorMessage name='email'></ErrorMessage>
                <br /><br />
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name='password'></ErrorMessage>
                <br /><br />
                <Field type="password" name="confirmpassword" placeholder="Confirm Password" />
                <ErrorMessage name='confirmpassword'></ErrorMessage>
                <br /><br />
                <Field as="select" name="education">
                    <option value="">select category</option>
                    <option value="graduate">Graduate</option>
                    <option value="postgraduate">PostGraduate</option>
                </Field>
                <ErrorMessage name='education'></ErrorMessage>

                <br /><br />


                Gender:
                <label>
                    <Field type="radio" name="gender" value="male" />Male
                </label>
                <label>
                    <Field type="radio" name="gender" value="female" />FeMale
                </label>
                <ErrorMessage name='gender'></ErrorMessage>

                <br /><br />

                Skills:
                <label>
                    <Field type="checkbox" name="skills" value="react" /> React
                </label>

                <label>
                    <Field type="checkbox" name="skills" value="node" /> Node
                </label>
                <ErrorMessage name='skills'></ErrorMessage>

                <br /><br />

                <label>
                    <Field type="checkbox" name="agree" />
                    Accept Terms
                </label>
                <ErrorMessage name='agree'></ErrorMessage>

                <button type='submit'>save</button>

            </Form>
        </Formik>
    )
}
