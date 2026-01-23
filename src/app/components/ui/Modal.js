'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

export default function Modal({ isOpen, onClose, children, title, message }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <>
      {/* Backdrop – blurs everything behind */}
      <div className={styles.backdrop} onClick={onClose} />

      {/* Modal content */}
      <div className={styles.modal}>
        {title && (
          <div className={styles.header}>
            <h2>{title}</h2>
            <button className={styles.closeBtn} onClick={onClose}>
              ×
            </button>
            
          </div>
        )}

        {message && (
          <div className={styles.message}>
            {message}
          </div>
        )}

        <div className={styles.content}>{children}</div>
      </div>
    </>,
    document.body
  );
}