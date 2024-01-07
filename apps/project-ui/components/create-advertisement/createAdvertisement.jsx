
import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuthKeycloak from "../../src/store/useAuthKeycloak.js";
import TestUpload from "./testUpload.jsx";

const CreateAdvertisement = () => {
    const [advertisementTitle, setAdvertisementTitle] = useState("");
    const [description, setDescription] = useState("");
    const [currency, setCurrency] = useState("");
    const [price, setPrice] = useState("");
    const [fetchCategory, setFetchCategory] = useState([]);
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("ACTIVE");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
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

    const handleAdvertisementSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/advertisements`,
                {
                    advertisementTitle,
                    description,
                    currency,
                    price: parseInt(price, 10),
                    categoryId: category.id,
                    status,
                    imageUrl: `${import.meta.env.VITE_BASE_URL}/download-file/${selectedFile}`,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setIsLoading(false);
            console.log("Advertisement created:", response.data);
            setFormSubmitted(true);
        } catch (error) {
            setIsLoading(false);
            console.error("Error creating Advertisement:", error);
        }
    };

    return (
        <div>
            {!formSubmitted ? (
                <form onSubmit={handleAdvertisementSubmit} className="rounded-md">
                    <h2 className="text-lg font-semibold mb-4">Create Advertisement</h2>
                    {/* Input fields for advertisement details */}
                    <div className="mb-4">
                        <label htmlFor="advertisementTitle" className="block mb-1">
                            Advertisement Title:
                        </label>
                        <input
                            type="text"
                            id="advertisementTitle"
                            value={advertisementTitle}
                            onChange={(e) => setAdvertisementTitle(e.target.value)}
                            className="border rounded px-2 py-1 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-1">
                            Description:
                        </label>
                        <input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border rounded px-2 py-1 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="currency" className="block mb-1">
                            Currency:
                        </label>
                        <input
                            type="text"
                            id="currency"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="border rounded px-2 py-1 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block mb-1">
                            Price:
                        </label>
                        <input
                            type="text"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="border rounded px-2 py-1 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block mb-1">
                            Category:
                        </label>
                        <select
                            id="category"
                            onChange={(e) =>
                                setCategory(
                                    fetchCategory.find((item) => item.categoryType === e.target.value)
                                )
                            }
                            className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a Category</option>
                            {fetchCategory.map((type) => (
                                <option key={type.id} value={type.categoryType}>
                                    {type.categoryType}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <TestUpload setFileUrl={setSelectedFile}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="status" className="block mb-1">
                            Status:
                        </label>
                        <input
                            type="text"
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="border rounded px-2 py-1 w-full"
                        />
                    </div>
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-100"
                    >
                        {isLoading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            ) : (
                <div className="text-green-600 text-center mt-8">
                    <p>Advertisement created successfully!</p>
                </div>
            )}
        </div>
    );
};

export default CreateAdvertisement;
