import "./service.css";
import {  useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Button, Spin } from "antd";
import { baseService } from "../network/services/baseService";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";

import { ArrowRightOutlined } from "@ant-design/icons";

import { Avatar, Card } from "antd";

const { Meta } = Card;
//^ buradaki id title gibi bilgilere göre api yi düzenleyip uygun veriyi gösterebiliriz
//^ title da bu mantıkla geliyor zaten
//^ ekstra çok düzenlemeye gerek yok bu kısımda
const ServicePage = ({ id, title, breif, descr, imageSrc }) => {

  const [supplierList, setSupplierList] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSuppliers();

  }, []);

  console.log(supplierList);

  console.log(`/suppliers/${id}`)
  const getSuppliers = async () => {
    try {
      //  const data = await baseService.get(`/suppliers/${id}`);
      const data = await baseService.get(`/suppliers/`);
      const _data = data.map((item) => {
        const { id, companyName, contactTitle, address } = item;
        return {
          id,
          companyName,
          contactTitle,
          country: address?.country,
        };
      });
      setSupplierList(_data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  const goToDetail = (x) => {
    navigate(`/services/${id}/${x}`, { state: "Derya" });

    window.history.pushState(null, '', `/services/${id}/${x}`);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
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
          {title}
        </motion.h1>
      </div>
      <Spin tip="Loading..." spinning={isLoading}>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto grid grid-cols-3 max-md:grid-rows-4 max-md:grid-cols-1 grid-rows-3 p-5 max-lg:px-5 gap-2"
        >
          {/* <Spin tip="Loading..." spinning={isLoading}>
          <Table columns={columns} dataSource={supplierList} rowKey={"id"} />
        </Spin>  */}

          {supplierList.map((e, i) => {
            return (
              <Card 
              key={i}
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                 
                    <Button type="link" onClick={() => goToDetail(e.id)} icon = {  <ArrowRightOutlined /> } >
                      Go to Detail
                    </Button>
                
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  }
                  title={e.contactTitle}
                  description={e.companyName}
                />
              </Card>
            );
          })}
        </div>
      </Spin>
    </>
  );
};

export default ServicePage;
