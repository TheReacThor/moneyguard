import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import style from './ModalEditTransaction.module.css';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm.jsx';
import modalCloseIcon from '../../assets/Icons/modalCloseIcon.svg';
import { closeEditModal } from '../../redux/Modals/slice';

Modal.setAppElement('#root');

function ModalEditTransaction() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modals.isEditModalOpen);
  const editId = useSelector((state) => state.modals.editId);

  const handleClose = () => {
    dispatch(closeEditModal());
    console.log('Close edit modal');
  };

  return (
    <Modal
      isOpen={isOpen}
      className={style.modal}
      overlayClassName={style.modalWrap}
      onRequestClose={handleClose}
    >
      <div className={style.modalClose} onClick={handleClose}>
        <img src={modalCloseIcon} alt='Close' />
      </div>
      <h2 className={style.modalTitle}>Edit transaction</h2>
      <EditTransactionForm transactionId={editId} />
    </Modal>
  );
}

export default ModalEditTransaction;
