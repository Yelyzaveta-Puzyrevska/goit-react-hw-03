import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Number is too short!")
      .max(50, "Number is too long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values.name, values.number);
        resetForm();
      }}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name:
          <Field name="name" className={s.input} />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>
        <label className={s.label}>
          Number:
          <Field name="number" className={s.input} />
          <ErrorMessage name="number" component="div" className={s.error} />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
