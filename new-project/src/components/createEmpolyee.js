import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createEmpolyees } from '../redux/action';
const Basic= () => {
    const dispatch=useDispatch();
  return (
    <Formik
      initialValues={{id:1, name: '', mobile: '', email: '',company:"" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Name is Required'),
        mobile: Yup.string()
          .required('Mobile Number is Required'),
        email: Yup.string().email('Invalid email address').required('Email is Required'),
        company: Yup.string()
          .required('Company is Required'),
      })}
   
    onSubmit={(values) => {
        const formData= {id:values.id,name:values.name,mobile:values.mobile, email: values.email, company:values.company }
         if(values){
            dispatch(createEmpolyees(formData))
         }
        console.log("values",values)
       
      }}
    >
      <Form>
        <label htmlFor="name">Name:</label>
        <Field name="name" type="text" /><br/>
        <ErrorMessage  name="name" /><br/>

        <label htmlFor="mobile">Mobile:</label>
        <Field name="mobile" type="number" /><br/>
        <ErrorMessage name="mobile" /><br/>

        <label htmlFor="email">Email Address:</label>
        <Field name="email" type="email" /><br/>
        <ErrorMessage name="email" /><br/>
        <label htmlFor="company">Company:</label>
        <Field name="company" type="text" /><br/>
        <ErrorMessage name="company" /><br/>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default Basic;