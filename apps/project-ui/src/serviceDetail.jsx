import ServicesComponent from "../components/services-page-components/services";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { baseService } from "../components/network/services/baseService";
import { motion } from "framer-motion";
import { animationVariants } from "../constants/animationVariants";
import { Button, Spin, Table } from "antd";
import { Descriptions } from "antd";
import useAuthKeycloak from "./store/useAuthKeycloak";
import axios from "axios";

const ServiceDetail = () => {
  const [advertisement, setAdvertisement] = useState({});
  const [users, setUsers] = useState({});
  const params = useParams(); //
  const location = useLocation(); // gizli infolar için sadece listeden gidersen elemanı taşı
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const {token} = useAuthKeycloak();
  console.log("token: ---------- ",token)

  const headers = {
    'Authorization': `Bearer ${token}`
  };


  useEffect(() => {
    getData();
    getUser();
  }, []);

  console.log(users.data);

  const getData = async () => {
    const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/advertisements/${params.id}`, {headers});
    setAdvertisement(data.data);
    setIsLoading(false);
  };


  const getUser = async () => {
    const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`, {headers});
    setUsers(data.data);
   
  };

  //* burada uygun id si olan user ın infosunu alıp aşağıda render lıyoruz
  //! user a erişim yetkimiz yok token uygun değil 403 hatası veriyor
 // let data_filter = users.filter((x) => x.id === advertisement.userId);

  const items = [
    {
      key: "1",
      label: "UserName",
      children: "Zhou Maomao",
    },
    {
      key: "2",
      label: "Telephone",
      children: "1810000000",
    },
    {
      key: "3",
      label: "Live",
      children: "Hangzhou, Zhejiang",
    },
    {
      key: "4",
      label: "Remark",
      children: "empty",
    },
    {
      key: "5",
      label: "Address",
      children:
        "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China",
    },
  ];

  return (
    <>
      <div className="relative bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white ">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50"></div>
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="text-6xl max-md:text-5xl max-sm:text-4xl font-semibold z-10"
        ></motion.h1>
      </div>
      {/* <Descriptions title="User Info" items={items} />; */}
      <Spin tip="Loading..." spinning={isLoading}>
        <h1>Detail Page: </h1>
        <h3>Title {advertisement.advertisementTitle}</h3>
        <h3>Description {advertisement.description}</h3>
        {/* user ınfo part */}
        {/* <h3>User First Name: {data_filter.first_name}</h3>
        <h3>User Last Name:{data_filter.last_name}</h3>
        <h3>Email {data_filter.email}</h3> */}
   
       

        <button onClick={() => navigate(-1)}>Go Back</button>
        <button onClick={() => navigate(-2)}>Go 2 Back</button>
        <button onClick={() => navigate(2)}>Go 2 Forward</button>
      </Spin>
    </>
  );
};

export default ServiceDetail;
