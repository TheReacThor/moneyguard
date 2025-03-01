import style from './LoginForm.module.css';
import moneyGuardIcon from '../../assets/moneyGuard.svg';
import emailIcon from '../../assets/Icons/emailIcon.svg';
import passwordIcon from '../../assets/Icons/passwordIcon.svg';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function LoginForm() {
  // Formik için validation schema- Daha sonra schema klasorune kaldirilacak
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  // Formik initial values
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <div className={style.background}>
      <div className={style.title}>
        <img src={moneyGuardIcon} alt='Money Guard Icon' />
        <h3 className={style.titleText}>Money Guard</h3>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={style.form}>
            <div className={style.inputWrapper}>
              <div className={style.inputContainer}>
                <img src={emailIcon} alt='Email Icon' className={style.icon} />
                <Field className={style.input} type='email' name='email' placeholder='E-mail' />
              </div>
              <ErrorMessage name='email' component='div' className={style.error} />
            </div>
            <div className={style.inputWrapper}>
              <div className={style.inputContainer}>
                <img src={passwordIcon} alt='Password Icon' className={style.icon} />
                <Field
                  className={style.input}
                  type='password'
                  name='password'
                  placeholder='Password'
                />
              </div>
              <ErrorMessage name='password' component='div' className={style.error} />
            </div>

            {/* Strong Pass ile ilgili Library'e bakicam... */}
            <div className={style.buttons}>
              <button type='submit' className={style.buttonRegister} disabled={isSubmitting}>
                Register
              </button>
              <a href='/login'>
                <button type='button' className={style.buttonLogin}>
                  Log in
                </button>
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
