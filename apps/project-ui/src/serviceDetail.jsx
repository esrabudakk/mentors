import ServicesComponent from '../components/services-page-components/services';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { baseService } from '../components/network/services/baseService';
import { motion } from "framer-motion";
import { animationVariants } from '../constants/animationVariants';
import { Button, Spin, Table } from "antd";
import { Descriptions } from 'antd';



const ServiceDetail = () => {
  
    const [supplier, setSupplier] = useState({});
    const params = useParams(); //
    const location = useLocation();// gizli infolar için sadece listeden gidersen elemanı taşı
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      const data = await baseService.get('/suppliers/' + params.id);
          setSupplier(data);
          setIsLoading(false);
      };
  
      
      const items = [
        {
          key: '1',
          label: 'UserName',
          children: 'Zhou Maomao',
        },
        {
          key: '2',
          label: 'Telephone',
          children: '1810000000',
        },
        {
          key: '3',
          label: 'Live',
          children: 'Hangzhou, Zhejiang',
        },
        {
          key: '4',
          label: 'Remark',
          children: 'empty',
        },
        {
          key: '5',
          label: 'Address',
          children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
        },
      ];
  
    return (
      <>
        <div
       
          className="relative bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white "
        >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50"></div>
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="text-6xl max-md:text-5xl max-sm:text-4xl font-semibold z-10"
          >
          </motion.h1>
        </div>
  
        <Descriptions title="User Info" items={items} />;
  
         <Spin tip="Loading..." spinning={isLoading} >
        <h1>Detail Page: </h1>
        <h3>Company Name: {supplier.companyName}</h3>
        <h3>Contact Name: {supplier.contactName}</h3>
        <h3>City: {supplier.address?.city}</h3>
        <h3>{supplier?.detail}</h3>
        <p>{location.state?.toUpperCase()}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <button onClick={() => navigate(-2)}>Go 2 Back</button>
        <button onClick={() => navigate(2)}>Go 2 Forward</button>
        </Spin> 
      </>
    );
  };
  
  export default ServiceDetail;
  