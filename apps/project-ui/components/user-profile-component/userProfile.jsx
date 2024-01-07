import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthKeycloak from '../../src/store/useAuthKeycloak.js';
import './UserProfilePage.css'; // Stil dosyası
import { EditOutlined, SaveOutlined } from '@ant-design/icons'; // Edit ve Save iconları

const UserProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [editing, setEditing] = useState(false);
    const [updatedData, setUpdatedData] = useState(null);
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
    }, [token]);

    const handleEdit = () => {
        setEditing(true);
        setUpdatedData(userData);
    };

    const handleSave = async () => {
        try {
            await axios.patch(
                `${import.meta.env.VITE_BASE_URL}/my-profile`,
                { phone: updatedData.phone, username: updatedData.username, aboutMessage: updatedData.aboutMessage },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setUserData(updatedData);
            setEditing(false);
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData({ ...updatedData, [name]: value });
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
                        {!editing ? (
                            <>
                                <p>Phone: {userData.phone}</p>
                                <p>Username: {userData.username}</p>
                                <p>About: {userData.aboutMessage}</p>
                            </>
                        ) : (
                            <>
                                <input type="text" name="phone" value={updatedData.phone} onChange={handleChange} />
                                <input type="text" name="username" value={updatedData.username} onChange={handleChange} />
                                <input type="text" name="aboutMessage" value={updatedData.aboutMessage} onChange={handleChange} />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfilePage;
