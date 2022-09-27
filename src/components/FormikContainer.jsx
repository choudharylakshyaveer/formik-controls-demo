import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer(props) {
  const dropdownOptions=[
    {key: 'Select an option', value:''},
    {key: 'Option1', value:'Value1'},
    {key: 'Option2', value:'Value2'},
    {key: 'Option3', value:'Value3'},
    {key: 'Option4', value:'Value4'}
  ];
  const radioOptions=[
    {key: 'Select an option', value:''},
    {key: 'Option1', value:'Value1'},
    {key: 'Option2', value:'Value2'},
    {key: 'Option3', value:'Value3'},
    {key: 'Option4', value:'Value4'}
  ];
   
  const initialValues = {
    email:'',
    description:'',
    selectOption: '',
    radioOption: ''
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required")
  });
  const onSubmit = (values) => console.log("Form Data", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
            <FormikControl control='input' type='email' label='Email' name='email'/>
            <FormikControl control='textarea' type='textarea' label='Description' name='description'/>
            <FormikControl control='select' label='Select a topic' name='selectOption' options={dropdownOptions} />
            <FormikControl control='radio' label='Radio topic' name='radioOption' options={radioOptions} /> 
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
