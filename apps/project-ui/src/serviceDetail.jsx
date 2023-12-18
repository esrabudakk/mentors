import ServicesComponent from "../components/services-page-components/services";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { baseService } from "../components/network/services/baseService";
import { motion } from "framer-motion";
import { animationVariants } from "../constants/animationVariants";
import { Divider, Spin } from "antd";
import { Descriptions } from "antd";
import useAuthKeycloak from "./store/useAuthKeycloak";
import axios from "axios";
import background from "../public/services-page-images/service-hero-bg.jpg";
import {
  IconButton,
  Heading,
  Box,
  Card,
  CardBody,
  CardFooter,
  Text,
  CardHeader,
  Flex,
  Avatar,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";

const ServiceDetail = () => {
  const [advertisement, setAdvertisement] = useState({});
  const [users, setUsers] = useState({});
  const params = useParams(); //
  const location = useLocation(); // gizli infolar için sadece listeden gidersen elemanı taşı
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const { token } = useAuthKeycloak();
  console.log("token: ---------- ", token);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    getData();
    getUser();
  }, []);

  console.log(users.data);

  const getData = async () => {
    const data = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/advertisements/${params.id}`,
      { headers }
    );
    setAdvertisement(data.data);
    setIsLoading(false);
  };

  const getUser = async () => {
    const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`, {
      headers,
    });
    setUsers(data.data);
  };

  //* burada uygun id si olan user ın infosunu alıp aşağıda render lıyoruz
  //! user a erişim yetkimiz yok token uygun değil 403 hatası veriyor
  // let data_filter = users.filter((x) => x.id === advertisement.userId);

  const items = [
    {
      key: "1",
      label: "Telephone",
      children: "1810000000",
      span: 2,
    },
    {
      key: "2",

      children: "Hangzhou, Zhejiang",
      span: 2,
    },

    {
      key: "3",
      label: "Address",
      children:
        "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China",
      span: 3,
    },
    {
      key: "3",
      children: (
        <Divider orientation="left" style={{ marginBottom: "-5px" }}>
          About Me
        </Divider>
      ),
      span: 3,
    },
    {
      key: "3",

      children:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam, ipsum labore tempora, nesciunt blanditiis ut laboriosam quis dolore distinctio officia debitis. Aspernatur, harum quibusdam.",
      span: 3,
    },
  ];

  const infoAdvert = [
    {
      key: "1",
      //^   label: "Description",
      children: `${advertisement.description}`,
      span: 3,
    },
    {
      key: "2",
      label: "Description",
      children: `${advertisement.description}`,
      span: 3,
    },
    {
      key: "3",
      label: "Detail",
      children: `${advertisement.description}`,
      span: 3,
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
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
        ></motion.h1>
      </div>

      <div
        style={{
          maxWidth: 1200,
          height: "fit-content",
          gridTemplateColumns: "2fr 1fr",
          gridGap: "10px",
        }}
        className="mx-auto grid grid-cols-3 max-md:grid-rows-1 max-md:grid-cols-1  pb-15 p-5 max-lg:px-5 gap-4"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Spin tip="Loading..." spinning={isLoading}>
            <Card style={{ width: "100%" }}>
              <CardHeader
              // style={{
              //   backgroundImage: `url(${background})`,
              // }}
              // className="relative bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white "
              >
                <Image
                  src={`https://picsum.photos/id/${advertisement.id}/700/450`}
                  //   "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                />
                {/* <Text as="b" fontSize="30px">
                  {advertisement.advertisementTitle}
                </Text> */}
              </CardHeader>
              <CardBody
                style={{
                  marginTop: "-30px",
                  display: "grid",
                  gridTemplateColumns: "2fr",
                  gridGap: "20px",
                }}
              >
                {/* <Divider style={{ marginTop: "-15px" }}>More Info</Divider> */}

                <Text
                  fontSize="2xl"
                  as="b"
                  style={{ float: "left", margin: "10px" }}
                >
                  More Info About Advert.
                </Text>

                <Text
                  fontSize="md"
                  style={{ padding: "10px", margin: "5px 0" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  consectetur tempora excepturi, est praesentium perferendis
                  iure doloribus ducimus voluptatum sequi animi laborum
                  cupiditate neque libero maxime dolore consequatur optio, cum
                  nemo ratione at asperiores cumque.
                </Text>
              </CardBody>

              <CardFooter
                justify="space-between"
                flexWrap="wrap"
                sx={{
                  "& > button": {
                    minW: "136px",
                  },
                }}
              >
                <Descriptions items={infoAdvert} style={{ padding: "10px" }} />
              </CardFooter>
            </Card>
          </Spin>
        </div>
        {/* <h1>Detail Page: </h1>
      <h3>Title {advertisement.advertisementTitle}</h3>
      <h3>Description {advertisement.description}</h3> */}
        {/* user ınfo part */}
        {/* <h3>User First Name: {data_filter.first_name}</h3>
        <h3>User Last Name:{data_filter.last_name}</h3>
        <h3>Email {data_filter.email}</h3> */}

        {/* <button onClick={() => navigate(-1)}>Go Back</button>
          <button onClick={() => navigate(-2)}>Go 2 Back</button>
          <button onClick={() => navigate(2)}>Go 2 Forward</button> */}

        <div

          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />

                  <Box>
                    <Heading size="sm">
                      Segun Adebayo
                      {/* {data_filter.first_name}  {data_filter.last_name} */}
                    </Heading>
                    <Text>Creator, Chakra UI</Text>
                  </Box>
                </Flex>
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Divider style={{ marginTop: "-15px" }}></Divider>
              <Descriptions items={items} />
              {/* <Text>
            
                With Chakra UI, I wanted to sync the speed of development with
                the speed of design. I wanted the developer to be just as
                excited as the designer to create a screen.
              </Text> */}
            </CardBody>

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            ></CardFooter>
          </Card>
        </div>
      </div>
      <div
      className="mx-auto grid grid-cols-3 max-md:grid-cols-1  pb-15 p-5 max-lg:px-5 gap-2"
        style={{
          margin: "auto",
          maxWidth: 1200,
          height: "fit-content",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr ",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <Card maxW="ml" style={{borderRadius:"25px"}}>
            <CardBody height="500px">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" //{`https://picsum.photos/id/${e.id}/300/250`}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="1" spacing="1">
                <Heading height="25px" size="sm"></Heading>
                <Text>aisldkgjnhfaısj</Text>
                <Text color="blue.600" fontSize="xl"></Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter height="100px">
              <Button type="link">Go to Detail</Button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card maxW="ml"  style={{borderRadius:"25px"}}>
            <CardBody height="500px">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" //{`https://picsum.photos/id/${e.id}/300/250`}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="1" spacing="1">
                <Heading height="25px" size="sm"></Heading>
                <Text>aisldkgjnhfaısj</Text>
                <Text color="blue.600" fontSize="xl"></Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter height="100px">
              <Button type="link">Go to Detail</Button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card maxW="ml"  style={{borderRadius:"25px"}}>
            <CardBody height="500px">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" //{`https://picsum.photos/id/${e.id}/300/250`}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="1" spacing="1">
                <Heading height="25px" size="sm"></Heading>
                <Text>aisldkgjnhfaısj</Text>
                <Text color="blue.600" fontSize="xl"></Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter height="100px">
              <Button type="link">Go to Detail</Button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card maxW="ml"   style={{borderRadius:"25px"}} >
            <CardBody height="500px">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" //{`https://picsum.photos/id/${e.id}/300/250`}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="1" spacing="1">
                <Heading height="25px" size="sm"></Heading>
                <Text>aisldkgjnhfaısj</Text>
                <Text color="blue.600" fontSize="xl"></Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter height="100px">
              <Button type="link">Go to Detail</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
