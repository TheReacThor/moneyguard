import style from './RegisterForm.module.css';
import moneyGuardIcon from '../../assets/moneyGuard.svg';
import nameIcon from '../../assets/Icons/nameIcon.svg';
import emailIcon from '../../assets/Icons/emailIcon.svg';
import passwordIcon from '../../assets/Icons/passwordIcon.svg';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import registrationValidationSchema from '../../schemas/registrationValidationSchema';
import { Link } from 'react-router-dom';
import PasswordStrengthBar from 'react-password-strength-bar-with-style-item';

function RegisterForm() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <div className={style.background}>
      <div className={style.title}>
        <img src={moneyGuardIcon} alt='Money Guard Icon' />
        <h3 className={style.titleText}>Money Guard</h3>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={registrationValidationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className={style.form}>
            <div className={style.inputWrapper}>
              <div className={style.inputContainer}>
                <img src={nameIcon} alt='Name Icon' className={style.icon} />
                <Field className={style.input} type='text' name='name' placeholder='Name' />
              </div>
              <ErrorMessage name='name' component='div' className={style.error} />
            </div>
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
            <div className={style.inputWrapper}>
              <div className={style.inputContainer}>
                <img src={passwordIcon} alt='Confirm Password Icon' className={style.icon} />
                <Field
                  className={style.input}
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirm Password'
                />
              </div>
              <ErrorMessage name='confirmPassword' component='div' className={style.error} />
              <PasswordStrengthBar
                password={values.password}
                className={style.passwordStrengthBar}
                scoreWords={[]}
                scoreColors={['#ffb627', '#ffb627', '#ffb627', '#ffb627']}
                //  /* still veremedim buna bakicam tekrardan */
              />
            </div>
            <div className={style.buttons}>
              <button type='submit' className={style.buttonRegister} disabled={isSubmitting}>
                REGISTER
              </button>
              <Link to='/login'>
                <button type='button' className={style.buttonLogin}>
                  LOG IN
                </button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
