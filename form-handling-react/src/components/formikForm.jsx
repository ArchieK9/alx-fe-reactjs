import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const FormikForm = () => (
    <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log('Form Submitted:', values);
            setSubmitting(false);
            resetForm();
        }}
    >
        {({ isSubmitting }) => (
            <Form>
                <div>
                    <Field type="text" name="username" placeholder="Username" />
                    <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
                </div>
                <br />

                <div>
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                </div>
                <br />

                <div>
                    <Field type="password" name="password" placeholder="Password" />
                    <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                </div>
                <br />

                <button type="submit" disabled={isSubmitting}>
                    Register
                </button>
            </Form>
        )}
    </Formik>
)

export default FormikForm;
