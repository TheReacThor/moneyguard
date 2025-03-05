import Modal from 'react-modal';
import style from './ModalEditTransaction.module.css';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm.jsx';
import modalCloseIcon from '../../assets/Icons/modalCloseIcon.svg';
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

Modal.setAppElement('#root');
function ModalEditTransaction() {
  const isAddOpen = true;
  const [closeAddModal, setCloseModal] = useState(false);
  const handleClose = () => {
    setCloseModal(true);
  };
  return (
    <Modal
      isOpen={isAddOpen}
      className={style.modal}
      overlayClassName={style.modalWrap}
      onRequestClose={handleClose}
    >
      <div className={style.modalClose} onClick={handleClose}>
        <img src={modalCloseIcon} alt='Modal Close Icon' />
      </div>
      <h2 className={style.modalTitle}>Edit transaction</h2>
      <EditTransactionForm />
    </Modal>
  );
}

export default ModalEditTransaction;
