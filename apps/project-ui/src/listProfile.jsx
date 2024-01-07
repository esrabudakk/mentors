import React, { useState } from "react";
import {
  Box,
  CardHeader,
  Heading,
  Flex,
  Card,
  CardBody,
  Avatar,
  IconButton,
  CardFooter,
  TableContainer,
  Stack,
  Table,
  Tbody,
  Thead,
  Tr,
  Td,
  Button,
  Th,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuDivider,
  MenuList,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  ButtonGroup,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { animationVariants } from "../constants/animationVariants";
import { useNavigate } from "react-router";
import useAuthKeycloak from "./store/useAuthKeycloak";
import axios from "axios";
import { useEffect } from "react";
const ListProfile = () => {

  //^ idareten bir id aldım 
  let id = 3;
  const [users, setUsers] = useState({});
  const navigate = useNavigate();
  // const [buttonText, setButtonText] = useState('');
  const { token } = useAuthKeycloak();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`, {
      headers,
    });
    setUsers(data.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted: ", {
      iletisim,
      yetkinlikler,
      baslık,
    });
  };

  const goToDetail = (x) => {
    navigate(
      `/listProfile/${x}`,
    );
    window.history.pushState(null, "", `/listProfile/${x}`);
  };

  // const takeInfo = (buttonText) => {
  //   setButtonText(buttonText);
  // }

  const initialFocusRef = React.useRef();

  return (
    <>
      <div className=" w-full overflow-hidden">
        <div className=" flex bg-[url('/15.png')] pt-36 pb-20 bg-top bg-no-repeat bg-cover">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
            style={{ maxWidth: 1200 }}
            className="mx-auto w-full text-white px-10 max-sm:px-5 flex flex-col max-lg:items-center max-lg:text-center gap-12"
          >
            <motion.h1
              variants={animationVariants.fadeLeft}
              className="text-6xl padding-right   max-w-lg "
            >
              Bilgilerini düzenle
            </motion.h1>
          </motion.div>
          <motion.div
            variants={animationVariants.fadeLeft}
            className="flex max-lg:flex-col max-lg:items-center gap-10 w-full justify-between items-end mt-4"
          ></motion.div>

         

          {/* </Reveal> */}
        </div>
        {/* about section */}
      </div>
      <div className="bg-white">
        <div
          style={{ maxWidth: 1200, height: 1200 }}
          className="p-5 max-md:px-5 py-12 mx-auto grid grid-cols-2 grid-rows-1 gap-20 max-lg:grid-cols-1 max-lg:grid-rows-2 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-full max-lg:w-full flex flex-col  items-start max-lg:items-center max-lg:text-center gap-7"
          >
            <div className="text-5xl max-md:text-4xl max-md:text-center">
              <h1 className="font-semibold ">
                Başlık{" "}
                <span className="font-semibold title-font  text-red-500">
                  Bilgileri
                </span>
              </h1>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex  gap-3 text-xl items-center">
                <TableContainer>
                  <Table size="xl">
                    <Thead>
                      <Tr>
                        <Th>Bilgiler</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Th>Açıklama</Th>
                    </Tbody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </motion.div>

          <div className="w-full max-lg:w-full h-full max-sm:max-h-[700px] ">
            <div className=" h-full w-full relative overflow-hidden rounded-lg">
              <div className="absolute w-full h-full bg-white ">
                <Card maxW="l">
                  <CardHeader>
                    <Flex spacing="4">
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Stack direction="row">
                          <Avatar
                            colorScheme="blue"
                            src="https://bit.ly/broken-link"
                          />
                        </Stack>

                        <Box>
                          <Heading size="l">Ad Soyad</Heading>
                        </Box>
                      </Flex>
                      <IconButton
                        variant="ghost"
                        colorScheme="gray"
                        aria-label="See menu"
                      />
                    </Flex>
                  </CardHeader>
                  <CardBody></CardBody>
                  <TableContainer>
                    <Table size="xl">
                      <Thead>
                        <Tr>
                          <Th>Profil Bilgileri</Th>

                          <Th></Th>
                        </Tr>
                      </Thead>
                      <Tbody size="3">
                        <Tr>
                          <Td>İletişim :</Td>
                          {/* <Td>{users.phone}</Td> */}
                        </Tr>
                        <Tr>
                          <Td>Yetkinlikler :</Td>
                          <Td></Td>
                        </Tr>

                        <Tr>
                          <Td>Hesap türü : </Td>
                          <Td>--</Td>
                        </Tr>
                        <Thead>
                          <Tr>
                            <Stack direction="row" mp={5} spacing={4}>
                              <Button
                                leftIcon={""}
                                colorScheme="blue"
                                variant="solid"
                              >
                                Düzenle
                              </Button>
                              <Button
                                rightIcon={""}
                                colorScheme="blue"
                                variant="outline"
                                onClick={() => goToDetail(id)}
                              >
                                İş oluştur
                              </Button>
                            </Stack>
                          </Tr>
                        </Thead>
                      </Tbody>
                    </Table>
                  </TableContainer>

                  <CardFooter
                    justify="space-between"
                    flexWrap="wrap"
                    sx={{
                      "& > button": {
                        minW: "156px",
                      },
                    }}
                  ></CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProfile;
