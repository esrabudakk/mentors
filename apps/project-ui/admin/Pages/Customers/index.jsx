import React, { useState, useEffect } from 'react';
import { Table, Typography, Spin, Tag, Space, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import axios from 'axios';
import useAuthKeycloak from '../../../src/store/useAuthKeycloak';
import { Link } from "react-router-dom";

const Customers = () => {
  const { token } = useAuthKeycloak();
  const [veri, setVeri] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { Column } = Table

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/companies`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setVeri(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('API Hatası:', error);
    }
  };

  const handleApprovalClick = async (id, approvedStatus) => {
    try {
      
      const response = await axios.patch(`${import.meta.env.VITE_BASE_URL}/companies/${id}/approval`,    
      { "isApproved": approvedStatus },
      {headers: {
        Authorization: `Bearer ${token}`,
      },}
      )
      fetchCustomers();
      console.log(`Company ${id} approval successful:`, response.data);

    } catch (error) {
      console.error(`Error approving company ${id}:`, error);
    }
  };

  return (
    <div className="PageContent">
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Şirket Listesi</Typography.Title>
        <Spin tip="Loading..." spinning={isLoading}>
          <Table dataSource={veri} className="customized-table">
            <Column title="Company Title" dataIndex="companyTitle" key="companyTitle" />
            <Column title="Tax Number" dataIndex="taxNumber" key="taxNumber" />
            <Column title="Tax Office" dataIndex="taxOffice" key="taxOffice" />
            <Column title="Country" dataIndex="country" key="country" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
              title="Approved"
              dataIndex="isApproved"
              key="isApproved"
              render={(isApproved) => (isApproved ? 'Yes' : 'No')}
            />
            <Column title="Status" dataIndex="status" key="status" />
            <Column
              title="Action"
              key="action"
              render={(_, record) => (
                <Space size="middle">
                  <Button onClick={() => handleApprovalClick(record.id, !record.isApproved)}>
                    {record.isApproved ? 'Onayı Kaldır' : 'Onay Ver'}
                  </Button>
                </Space>
              )}
            />

          </Table>
        </Spin>
      </Space>
    </div>
  );
};

export default Customers;
