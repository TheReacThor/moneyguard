import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '/src/redux/Auth/operations';
import styles from './LogOutModal.module.css';

const LogOutModal = ({ onClose }) => {
    const dispatch = useDispatch();
    const modalRef = useRef(null);

    const handleConfirmLogout = () => {
        console.log("Evet butonuna tıklandı!");
        dispatch(logoutThunk());
        onClose();
    };


    const handleCancelLogout = () => {
        onClose();
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [onClose]);

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent} ref={modalRef}>
                <p>Çıkış yapmak istediğinize emin misiniz?</p>
                <button className={styles.confirmButton} onClick={handleConfirmLogout}>
                    Evet
                </button>
                <button className={styles.cancelButton} onClick={handleCancelLogout}>
                    Hayır
                </button>
            </div>
        </div>
    );
};

export default LogOutModal;
