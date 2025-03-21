import React from 'react';
import { X } from 'lucide-react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
  headerClassName = '',
  contentClassName = '',
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modal} ${className}`} style={{ width: '100vw', height: '90vh', maxWidth: '100vw' }}>
        <div className={`${styles.modalHeader} ${headerClassName}`}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X />
          </button>
        </div>
        <div className={`${styles.modalContent} ${contentClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;