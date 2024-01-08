import "./service.css";
import ServiceCard from "./serviceCard";
import { servicesData } from "../../constants/servicesData";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import useAuthKeycloak from "../../src/store/useAuthKeycloak.js";
import {useEffect, useState} from "react";
import axios from "axios";
const ServicesComponent = () => {
  const [fetchCategory, setFetchCategory] = useState([]);
  const { token } = useAuthKeycloak();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/public/categories`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
        );
        setFetchCategory(response.data);
      } catch (error) {
        console.error("Error fetching consultant types:", error);
      }
    }
    fetchCategories();
  }, [token]);
  return (
    <>
      <div className="bg-[url(/21.png)] bg-fixed bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 ">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="flex gap-10 justify-between items-end max-md:items-center px-10 mx-auto max-md:px-5 max-md:flex-col"
        >
          <div className="text-white flex flex-col gap-8 max-md:items-center max-md:text-center">
            <h1 className="text-5xl font-bold">CONSULTANCY</h1>
            <p className="text-xl max-w-md">
                Hundreds of consultants and thousands of projects are waiting for you. Come on! Choose the field you want below and improve yourself.
            </p>
          </div>
          <div className="flex gap-12 text-white max-md:text-center">
            <div className="flex max-md:items-center  flex-col gap-4">
              <h2 className="text-4xl title-font font-bold">25K+</h2>
              <p className="text-lg">User</p>
            </div>
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl  title-font font-bold">100+</h2>
              <p className="text-lg">Company</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto grid grid-cols-2 max-md:grid-rows-6 max-md:grid-cols-1 grid-rows-3 p-10 max-lg:px-5 gap-5"
      >
        {fetchCategory.map((e, i) => {
          return (
            <ServiceCard
              key={i}
              title={e.categoryType}
              brief={e.description}
              imgSrc={e.image}
              id={e.id}
              iconSrc={e.icon}
            />
          );
        })}
      </div>
    </>
  );
};

export default ServicesComponent;
{
  /* <div className="it-content text-xl  gap-2 justify-center items-center flex-col max-w-md text-center hidden overflow-hidden scale-y-0  transition-all  ">
    <p>
    We believe that technology design are revolutionizing brand
    experiences.
    </p>
    <a className="font-bold" href="">
    Read More {">"}
          </a> */
}
//   </div>
