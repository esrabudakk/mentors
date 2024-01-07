import React from 'react';
import { Modal } from 'antd';
import useModalStore from '../../src/store/useModal.js';

const modalStyles = {
    borderRadius: '8px',
};

const titleStyles = {
    borderBottom: '1px solid #f0f0f0',
    paddingBottom: '12px',
    marginBottom: '12px',
    fontSize: '20px',
    fontWeight: 'bold',
};

const bodyStyles = {
    padding: '20px',
};

export default function CustomModal() {
    const { isOpen, content, closeModal } = useModalStore();

    return (
        <Modal
            visible={isOpen}
            onCancel={closeModal}
            footer={null}
            style={modalStyles}
            width={600}
            centered
        >
            <div style={titleStyles}>Danisman Ol</div>
            <div style={bodyStyles}>{content}</div>
        </Modal>
    );
}
