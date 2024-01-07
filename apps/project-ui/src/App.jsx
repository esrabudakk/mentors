import Footer from "../components/footer/footer";
import ShowCase1 from "./showcase1";
import NavBar from "../components/navbar-component/navbar";
import Services from "./services";
import ShowCase2 from "./showcase2";
import Error404 from "./error404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutProject from "../components/project-page-components/aboutProject";
import Products from "./products";
import About from "./about";
import Service from "./service";
import HomePage from "../components/home-page-components/homePage";
import Featured from "../components/featured-&-popluar-page-component/featrued";
import Popular from "../components/featured-&-popluar-page-component/popluar";
import Contact from "./contact";
import Results from "./results";
import KeycloakAuth from "./keycloakauth.jsx";
import Logout from "./logout.jsx";
import ServiceDetail from "./serviceDetail.jsx";
import "./App.css";
import AppHeader from "../admin/Components/AppHeader"
import SideMenu from "../admin/Components/SideMenu"
import AppFooter from "../admin/Components/AppFooter"
import Dashboard from "../admin/Pages/Dashbaord/index.jsx";
import Customers from "../admin/Pages/Customers/index.jsx";
import Inventory from "../admin/Pages/Inventory/index.jsx";
import ConsultantForm from "../components/be-consultant/consultantForm.jsx";
import CustomModal from "../components/modal/CustomModal.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        <NavBar />
        <Services />
        <Footer />
      </>
    ),
  },
    {
    path: "/keycloak-auth",
    element: (
      <>
        <KeycloakAuth />
      </>
    ),
  },
  {
    path: "/logout",
    element: (
      <>
        <Logout />
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <NavBar navBar2={true} />
        <Results />
        <Footer />
      </>
    ),
  },
  {
    path: "/services/:id",
    element: (
      <>
        <NavBar />
        <Service />
        <Footer />
      </>
    ),
  },
  {
    path: "/services/:id/:id",
    element: (
      <>
        <NavBar />
        <ServiceDetail />
        <Footer />
      </>
    ),
  },
  {
    path: "/showcases/showcase1",
    element: (
      <>
        <NavBar showCase1Page={true} />
        <ShowCase1 />
        <Footer />
      </>
    ),
  },
  {
    path: "/showcases/showcase2",
    element: (
      <>
        <NavBar />
        <ShowCase2 />
        <Footer />
      </>
    ),
  },
  {
    path: "/featured",
    element: (
      <>
        <NavBar />
        <Featured />
        <Footer />
      </>
    ),
  },
  {
    path: "/popular",
    element: (
      <>
        <NavBar />
        <Popular />
        <Footer />
      </>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <>
        <NavBar navBar2={true} />
        <Products />
        <Footer />
      </>
    ),
  },
  {
    path: "/projects/:id",
    element: (
      <>
        <NavBar />
        <AboutProject />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <NavBar />
        <Footer />
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavBar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/admin/dashboard",
    element: (
      <>
        <div className="App">
          <AppHeader />
          <div className="SideMenuAndPageContent">
            <SideMenu></SideMenu>
            <Dashboard />
          </div>
          <AppFooter />
        </div>
      </>
    ),
  },
  {
    path: "/admin/customers",
    element: (
      <>
        <div className="App">
          <AppHeader />
          <div className="SideMenuAndPageContent">
            <SideMenu></SideMenu>
            <Customers />
          </div>
          <AppFooter />
        </div>
      </>
    ),
  },
  {
    path: "/admin/inventory",
    element: (
      <>
        <div className="App">
          <AppHeader />
          <div className="SideMenuAndPageContent">
            <SideMenu></SideMenu>
            <Inventory />
          </div>
          <AppFooter />
        </div>
      </>
    ),
  },
    {
        path: "/be-consultant",
        element: (
            <>
               <button className=''>Company</button>
               <button>Freelance</button>
            </>
        ),
    },

  {
    path: "*",
    element: <Error404 />,
  },
]);

function App() {

    return <><RouterProvider router={router} />
    <CustomModal/>
    </>
}

export default App;
