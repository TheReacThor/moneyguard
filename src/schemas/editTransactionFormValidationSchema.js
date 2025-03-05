import * as Yup from 'yup';

const editTransactionFormValidationSchema = Yup.object({
  amount: Yup.number().required('Amount is required'),
  transactionDate: Yup.date().required('Date is required'),
  type: Yup.string().required('Type is required'),
  category: Yup.string().required('Category is required'),
  comment: Yup.string().required('Comment is required'),
});

export default editTransactionFormValidationSchema;
