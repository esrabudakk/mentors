import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthKeycloak from '../../src/store/useAuthKeycloak.js';
import './UserProfilePage.css'; // Stil dosyası
import TestUpload from "../create-advertisement/testUpload.jsx"; // Edit ve Save iconları

const UserProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [editing, setEditing] = useState(false);
    const [updatedData, setUpdatedData] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [reloadComponent, setReloadComponent] = useState(false); // Yeniden yükleme için state
    const { token } = useAuthKeycloak();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/my-profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserData(response.data);
                setUpdatedData(response.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, [token, reloadComponent]); // reloadComponent state'i değiştiğinde useEffect tetiklenecek

    const handleEdit = () => {
        setEditing(true);
        setUpdatedData(userData);
    };

    const handleSave = async () => {
        try {
            await axios.patch(
                `${import.meta.env.VITE_BASE_URL}/my-profile`,
                {
                    phone: updatedData.phone,
                    username: updatedData.username,
                    aboutMessage: updatedData.aboutMessage,
                    imageUrl: `${import.meta.env.VITE_BASE_URL}/download-file/${selectedFile}`,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setUserData(updatedData);
            setEditing(false);
            setSelectedFile(null); // Dosya seçiminin sıfırlanması
            setReloadComponent(prevState => !prevState); // Componenti yeniden yükleme işlemi
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData({ ...updatedData, [name]: value });
    };

    return (
        <>
            {userData && (
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                    <img className="w-24 h-24 rounded-full mb-4" src={userData.imageUrl} alt={''} />
                    {!editing ? (
                        <>
                            <h2 className="text-xl font-bold text-gray-800">{userData.firstName + ' ' + userData.lastName}</h2>
                            <h3 className="text-md text-gray-600">{userData.phone}</h3>
                            <p className="text-sm text-gray-500 mt-4">{userData.aboutMessage}</p>
                            <p className="text-sm text-gray-500 mt-4">{userData.email}</p>
                            <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                                Edit Profile
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="mb-4">
                                <TestUpload setFileUrl={setSelectedFile}/>
                            </div>
                            <input type="text" name="phone" value={updatedData.phone} onChange={handleChange}/>
                            <input type="text" name="username" value={updatedData.username} onChange={handleChange}/>
                            <textarea name="aboutMessage" value={updatedData.aboutMessage} onChange={handleChange}/>
                            <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded mt-4">
                                Save Profile
                            </button>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default UserProfilePage;
