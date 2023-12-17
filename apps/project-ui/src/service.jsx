import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import ServicePage from "../components/service-component/service";
import { servicesData } from "../constants/servicesData";

const Service = () => {
  const navigate = useNavigate();
  const params = useParams();
  const serviceData = servicesData[params.id - 1];

  //! burada serviceData yerine categories i çekicez api ile
  //^ ya da lüzumu yok elimizdeki id lere göre verileri eşleştirip gösterebiliriz
  //* örnek bir servis datası id si ve title ı ile kategorilere ayrılmış 
  //* buradan id ile eşleşen bt danışmanlığındaki verileri bi alt sayfada filtreleyerek gösteriyoruz
  //* daha detaylı göstermek istediğimiz kısımlar için advertisement kolonunu kullanıyoruz 
  //* category_id si eşleşen advertisement kolonundaki verileri o kategoriye ait ilanın detay sayfasında render lıyoruz  
  // {
  //   id: 1,
  //   image: "/Services/images/it-consultancy.jpg",
  //   title: "BT Danışmanlığı",
  //   icon: "/Services/icons/it-consultancy-icon.png",
  //   shortDescription:
  //   "Teknoloji tasarımının marka deneyimlerinde devrim yarattığına inanıyoruz.",    heading: "Tuning in to what really matters",
  //   mainDescription:
  //   "Teknolojinin ve insan odaklı tasarımın marka deneyimlerinde devrim yarattığına inanıyoru..",  },
  

  useEffect(() => {
    const serviceData = servicesData.findIndex((e, i) => {
      return e.id == params.id;
    });
    console.log(serviceData);
    if (serviceData === -1) {
      navigate("/*");
    }
  }, []);
  useEffect(() => {
    document.title = `Servisler - ${serviceData.title} `;
  }, []);
  return (
    <ServicePage
      id={serviceData.id}
      title={serviceData.title}
      breif={serviceData.shortDescription}
      descr={serviceData.mainDescription}
      imageSrc={serviceData.image}
    />
  );
};

export default Service;
