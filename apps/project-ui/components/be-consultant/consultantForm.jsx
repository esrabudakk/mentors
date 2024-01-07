import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthKeycloak from '../../src/store/useAuthKeycloak.js';

const ConsultantForm = () => {
    const [consultantType, setConsultantType] = useState('');
    const [careerInformation, setCareerInformation] = useState('');
    const [education, setEducation] = useState('');
    const [consultantTypes, setConsultantTypes] = useState([]);
    const { token } = useAuthKeycloak();

    useEffect(() => {
        async function fetchConsultantTypes() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/consultant-types`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setConsultantTypes(response.data);
            } catch (error) {
                console.error('Error fetching consultant types:', error);
            }
        }

        fetchConsultantTypes();
    }, [token]);

    const handleFreelancerSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/consultants`,
                {
                    consultantType,
                    careerInformation,
                    education,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log('Freelancer Consultant created:', response.data);
        } catch (error) {
            console.error('Error creating Freelancer Consultant:', error);
        }
    };

    return (
        <form
            onSubmit={handleFreelancerSubmit}
            className="p-4 border rounded-md max-w-md mx-auto mt-8 bg-white shadow-md"
        >
            <h2 className="text-xl font-semibold mb-4 text-center">Freelancer Consultant Form</h2>
            <div className="mb-4">
                <label htmlFor="consultantType" className="block mb-1">
                    Consultant Type:
                </label>
                <select
                    id="consultantType"
                    value={consultantType}
                    onChange={(e) => setConsultantType(e.target.value)}
                    className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Consultant Type</option>
                    {consultantTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                            {type.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="careerInformation" className="block mb-1">
                    Career Information:
                </label>
                <input
                    type="text"
                    id="careerInformation"
                    value={careerInformation}
                    onChange={(e) => setCareerInformation(e.target.value)}
                    className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="education" className="block mb-1">
                    Education:
                </label>
                <input
                    type="text"
                    id="education"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
};

export default ConsultantForm;

