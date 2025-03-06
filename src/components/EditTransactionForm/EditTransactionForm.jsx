import style from './EditTransactionForm.module.css';
import dividerIcon from '../../assets/Icons/dividerIcon.svg';
import { Form, Formik, Field } from 'formik';
import editTransactionFormValidationSchema from '../../schemas/EditTransactionFormValidationSchema';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTransaction } from '../../redux/Transactions/operations';
import { selectCategories } from '../../redux/Statistics/selectors';
import { closeEditModal } from '../../redux/Modals/slice';
import { selectTransactions, selectIsEditID } from '../../redux/Transactions/selectors';
import { format } from 'date-fns';

const EditTransactionForm = () => {
  const categories = useSelector(selectCategories);
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();
  const IdForEdit = useSelector(selectIsEditID);

  const foundObject = transactions.find((item) => item.id === IdForEdit);

  const [isChecked, setIsChecked] = useState(true);
  useEffect(() => {
    if (foundObject) {
      if (foundObject.type === 'INCOME') {
        setIsChecked(false);
      } else if (foundObject.type === 'EXPENSE') {
        setIsChecked(true);
      }
    }
  }, [foundObject]);

  if (!foundObject) {
    return <div>Transaction not found</div>;
  }

  const initialValues = {
    amount: Math.abs(foundObject.amount),
    transactionDate: new Date(foundObject.transactionDate),
    type: foundObject.type,
    category: foundObject.categoryId,
    comment: foundObject.comment,
  };

  const handleSubmit = (values) => {
    const data = { ...values };
    if (!isChecked) {
      const categoryId = categories.find((el) => el.name === 'Income').id;
      data.categoryId = categoryId;
      data.type = 'INCOME';
    } else {
      data.type = 'EXPENSE';
      data.amount = Math.abs(data.amount);
    }

    const formattedDate = format(new Date(data.transactionDate), 'yyyy-MM-dd');
    data.transactionDate = formattedDate;

    if (foundObject.type === 'INCOME') {
      data.categoryId = foundObject.categoryId;
      data.amount = Math.abs(data.amount);
    } else {
      data.categoryId = data.category || foundObject.categoryId;
      data.amount = Math.abs(data.amount) * -1;
    }

    dispatch(editTransaction({ id: IdForEdit, transaction: data }));
    dispatch(closeEditModal());
  };

  return (
    <>
      <div className={style.title}>
        <h3 className={style.incomeTitle}>Income</h3>
        <img src={dividerIcon} alt='divider Icon' />
        <h3 className={style.expenseTitle}>Expense</h3>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={editTransactionFormValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className={style.form}>
            <Field className={style.input} name='amount' type='number' placeholder='8000.00' />

            <DatePicker
              selected={values.transactionDate}
              dateFormat='dd.MM.yyyy'
              className={`${style.input} ${style.date}`}
              name='transactionDate'
              onChange={(date) => setFieldValue('transactionDate', date)}
            />

            <Field
              as='textarea'
              className={`${style.input} ${style.textarea}`}
              name='comment'
              placeholder='January bonus'
            />

            <div className={style.btn_wrap}>
              <button className={style.btn} type='submit'>
                Save
              </button>
              <button
                className={style.btn}
                type='button'
                onClick={() => dispatch(closeEditModal())}
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditTransactionForm;
