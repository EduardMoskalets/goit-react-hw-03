import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from "../ContactForm/ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
})

export default function ContactForm({ onAdd }) {
  const fieldId = useId();
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      ...values,
    });
    // console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.formContainer}>
          <label htmlFor={`${fieldId}-name`}>Name</label>
          <Field className={css.form_field} type="text" name="name" id={`${fieldId}-name`} />
          <ErrorMessage name="name" component="span"/>
        </div>
        <div className={css.formContainer}>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field className={css.form_field} type="tel" name="number" id={`${fieldId}-number`} />
          <ErrorMessage name="number" component="span"/>
        </div>
        <button className={css.addCntBtn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}