import React, {useState} from "react";
import axios from "axios";
import useAuthKeycloak from "../../src/store/useAuthKeycloak.js";

const CompanyForm = () => {
    const [companyTitle, setCompanyTitle] = useState('');
    const [taxNumber, setTaxNumber] = useState('');
    const [taxOffice, setTaxOffice] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false); // State to manage form submission
    const {token} = useAuthKeycloak()

    const handleCompanySubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/companies/my-company`, {
                companyTitle,
                taxNumber,
                taxOffice,
                country,
                city,
                address,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log('Company created:', response.data);
            setFormSubmitted(true);

        } catch (error) {
            console.error('Error creating Company:', error);
        }
    };

    return (
       <div>{!formSubmitted ? (<form onSubmit={handleCompanySubmit} className="p-4 border rounded-md">
           <h2 className="text-lg font-semibold mb-4">Company Form</h2>
           <div className="mb-4">
               <label htmlFor="companyTitle" className="block mb-1">
                   Company Title:
               </label>
               <input
                   type="text"
                   id="companyTitle"
                   value={companyTitle}
                   onChange={(e) => setCompanyTitle(e.target.value)}
                   className="border rounded px-2 py-1 w-full"
               />
           </div>
           <div className="mb-4">
               <label htmlFor="taxNumber" className="block mb-1">
                   Tax Number:
               </label>
               <input
                   type="text"
                   id="taxNumber"
                   value={taxNumber}
                   onChange={(e) => setTaxNumber(e.target.value)}
                   className="border rounded px-2 py-1 w-full"
               />
           </div>
           <div className="mb-4">
               <label htmlFor="taxOffice" className="block mb-1">
                   Tax Office:
               </label>
               <input
                   type="text"
                   id="taxOffice"
                   value={taxOffice}
                   onChange={(e) => setTaxOffice(e.target.value)}
                   className="border rounded px-2 py-1 w-full"
               />
           </div>
           <div className="mb-4">
               <label htmlFor="country" className="block mb-1">
                   Country:
               </label>
               <input
                   type="text"
                   id="country"
                   value={country}
                   onChange={(e) => setCountry(e.target.value)}
                   className="border rounded px-2 py-1 w-full"
               />
           </div>
           <div className="mb-4">
               <label htmlFor="city" className="block mb-1">
                   City:
               </label>
               <input
                   type="text"
                   id="city"
                   value={city}
                   onChange={(e) => setCity(e.target.value)}
                   className="border rounded px-2 py-1 w-full"
               />
           </div>
           <div className="mb-4">
               <label htmlFor="address" className="block mb-1">
                   Address:
               </label>
               <input
                   type="text"
                   id="address"
                   value={address}
                   onChange={(e) => setAddress(e.target.value)}
                   className="border rounded px-2 py-1 w-full"
               />
           </div>
           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
               Submit
           </button>
       </form>) : (
           <div className="text-green-600 text-center mt-8">
               <p>Company registered successfully!</p>
           </div>
       )}</div>
    );
};

export default CompanyForm;