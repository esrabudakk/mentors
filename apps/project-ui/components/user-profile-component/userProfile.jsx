import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthKeycloak from '../../src/store/useAuthKeycloak.js';
import './UserProfilePage.css'; // Stil dosyası
import { EditOutlined, SaveOutlined } from '@ant-design/icons'; // Edit ve Save iconları

const UserProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [editing, setEditing] = useState(false); // State, düzenleme modunu izler
    const [updatedUserData, setUpdatedUserData] = useState(null); // Güncellenmiş kullanıcı verileri
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
                setUpdatedUserData(response.data); // Düzenlenmiş kullanıcı verilerini güncel veriyle başlat
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, [token]);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = async () => {
        try {
            await axios.patch(`${import.meta.env.VITE_BASE_URL}/users/my-profile`, {updatedUserData}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUserData(updatedUserData);
            setEditing(false);
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUserData({ ...updatedUserData, [name]: value });
    };

    return (
        <div className="profile-container">
            {userData && (
                <div className="profile">
                    <div className="profile-picture">
                        <img src={userData.profilePicture} alt="Profile" />
                    </div>
                    <div className="profile-info">
                        <h1>
                            {userData.firstName} {userData.lastName}
                            {editing ? (
                                <SaveOutlined onClick={handleSave} style={{ marginLeft: '8px', cursor: 'pointer' }} />
                            ) : (
                                <EditOutlined onClick={handleEdit} style={{ marginLeft: '8px', cursor: 'pointer' }} />
                            )}
                        </h1>
                        <p>Username: {userData.username}</p>
                        <p>Email: {userData.email}</p>
                        <p>Phone: {userData.phone}</p>
                        <p>Status: {userData.status}</p>
                        {editing && (
                            <>
                                <input type="text" name="aboutMessage" value={updatedUserData.aboutMessage} onChange={handleChange} />
                                {/* Diğer gerekli input alanları buraya eklenebilir */}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfilePage;
