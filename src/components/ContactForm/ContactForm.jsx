import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string().max(12, "Too Long!").required("Required"),
});

function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactFormSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values.name, values.number));
        actions.resetForm();
      }}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={s.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={s.error} name="name" component="span" />
        <label className={s.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={s.input}
          type="tel"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={s.error} name="number" component="span" />
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
export default ContactForm;