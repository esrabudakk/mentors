import "./service.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import { baseService } from "../network/services/baseService";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { ArrowRightOutlined } from "@ant-design/icons";
import useAuthKeycloak from "../../src/store/useAuthKeycloak.js";
import axios from "axios";
import {
  Stack,
  Button,
  Heading,
  Image,
  Card,
  CardBody,
  Divider,
  CardFooter,
  Text,
} from "@chakra-ui/react";

//^ buradaki id title gibi bilgilere göre api yi düzenleyip uygun veriyi gösterebiliriz
//^ title da bu mantıkla geliyor zaten
//^ ekstra çok düzenlemeye gerek yok bu kısımda
const ServicePage = ({ id, title, breif, descr, imageSrc }) => {
  const { token } = useAuthKeycloak();
  console.log("token: ---------- ", token);

  const [supplierList, setSupplierList] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // const instance = axios.create({
  //   baseURL: "http://157.230.84.216:3000",
  //   timeout: 1000,
  //   headers: {'Authorization': 'Bearer '+token}
  // });

  useEffect(() => {
    getSuppliers();
  }, []);

  console.log(supplierList);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  //* we are taking the id about categories
  //* we wanna show the advertisements about this categories
  //* so, we need to get advertisement
  //^we already take the id from the super class which is our category id
  //^this is equal in our advertisement table to category_id

  const getSuppliers = async () => {
    try {
      //* I am fetching the all advertisement data here
      //* category_id (advertisement) === id(category)
      //* if it is like that render that so we need to check this part actually

      //  const data = await baseService.get("/advertisements" , headers);
      //! important part
      const data = await axios
        .get(`${import.meta.env.VITE_BASE_URL}/advertisements`, { headers })
        .then((response) => {
          return response.data;
        });

      console.log(data);

      //^ checking the data array and look the category_id is our id and if it is it will return an array
      let data_filter = data.filter((x) => x.categoryId === 1);
      console.log(data_filter);
      //^ then, we are map this array and render in out page
      //^data.data.map => data_filter.map olarak degısecek
      const _data = data.map((item) => {
        const {
          id,
          advertisementTitle,
          description,
          price,
          createdAt,
          user_id,
        } = item;
        return {
          id,
          advertisementTitle,
          description,
          price,
          createdAt,
          user_id,
        };
      });
      setSupplierList(_data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const goToDetail = (x) => {
    navigate(
      `/services/${id}/${x}`
      //{ state: "deryaa" }
    );
    window.history.pushState(null, "", `/services/${id}/${x}`);
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
          {supplierList.map((e, i) => {
            return (
              <Card maxW="ml" width="300px" height="480px" key={i}>
                <CardBody height="480px">
                  <Image
                    src= {`https://picsum.photos/id/${e.id}/300/250`}
                    // "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="1" spacing="1">
                    <Heading height="25px" size="sm" mb="5">
                      {e.advertisementTitle}
                    </Heading>
                    <Text>{e.description}</Text>
                    <Text color="blue.600" fontSize="l">
                      {e.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter height="100px">
                  <Button
                    type="link"
                    onClick={() => goToDetail(e.id)}
                    icon={<ArrowRightOutlined />}
                  >
                    Go to Detail
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Spin>
    </>
  );
};

export default ServicePage;
