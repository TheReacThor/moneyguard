import style from './EditTransactionForm.module.css';
import dividerIcon from '../../assets/Icons/dividerIcon.svg';
import { Form, Formik, Field } from 'formik';
import editTransactionFormValidationSchema from '../../schemas/EditTransactionFormValidationSchema';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { editTransaction } from '../../redux/Transactions/operations';

const initialValues = {
  amount: Math.abs(transaction.amount),
  transactionDate: new Date(transaction.transactionDate),
  category: transaction.categoryId,
  comment: transaction.comment,
  type: transaction.type,
};

const handleSubmit = (values) => {
  console.log(values);
};

function EditTransactionForm() {
  const transaction = useSelector(editTransaction);
  // const [showField, setShowField] = useState(false);
  return (
    <>
      <div className={style.title}>
        <h3 className={style.incomeTitle}>Income</h3>
        <img src={dividerIcon} alt='divider Icon' />
        <h3 className={style.expenseTitle}>Expense</h3>
      </div>
      {/* Form inputs */}
      <Formik
        initialValues={initialValues}
        validationSchema={editTransactionFormValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name='amount' type='number' />
        </Form>
      </Formik>
    </>
  );
}

export default EditTransactionForm;
