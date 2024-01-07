import React from 'react';
import { Button } from 'antd';
import useModalStore from '../../src/store/useModal.js';
import ConsultantForm from './consultantForm.jsx';
import CompanyForm from './companyForm.jsx';

const buttonStyles = {
    width: '200px',
    height: '60px',
    fontSize: '18px',
    borderRadius: '8px',
    marginRight: '20px',
    marginBottom: '20px',
};

const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

function BeConsultantModal() {
    const { openModal } = useModalStore();

    return (
        <div style={containerStyles}>
            <Button
                type="primary"
                style={{ ...buttonStyles, background: '#1890ff', color: '#fff' }}
                onClick={() => openModal(<ConsultantForm />)}
            >
                Freelance
            </Button>
            <Button
                type="primary"
                style={{ ...buttonStyles, background: '#52c41a', color: '#fff' }}
                onClick={() => openModal(<CompanyForm />)}
            >
                Company
            </Button>
        </div>
    );
}

export default BeConsultantModal;
