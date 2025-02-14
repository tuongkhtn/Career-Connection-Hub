import React from 'react';
import { Card } from 'react-bootstrap';
import { IUser } from '../../../interfaces/user';
import { useState, useEffect } from 'react';
import axiosInstance from '../../../common/axiosInstance';

interface PersonalInfoSectionProps {
    userID?: string | null;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ userID }) => {
    const [user, setUser] = useState<IUser>();
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                console.log("userID", userID);
                const response = userID
                    ? await axiosInstance.get(`/user/${userID}/profile`)
                    : await axiosInstance.get("/user/profile");
                setUser(response.data.data.user);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserInfo();
    }, []);
    return (
        <Card className="p-3 mb-3 border-0 shadow-sm" style={{ maxWidth: '95%', margin: '0 auto' }}>
            <h5>Personal Information</h5>
            <div className="border rounded p-3 bg-light">
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ marginBottom: '1rem' }}>
                <strong>Name:</strong> {(user?.first_name ?? "") + " " + (user?.last_name ?? "")}
                </li>
                <li style={{ marginBottom: '1rem' }}>
                <strong>Date of birth:</strong> {
                    user?.date_of_birth 
                    ? new Date(user?.date_of_birth).toLocaleDateString('default', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      }) 
                    : "No date of birth provided"
                }
                </li>
                <li style={{ marginBottom: '1rem' }}>
                <strong>Email:</strong> {user?.email}
                </li>
                <li style={{ marginBottom: '1rem' }}>
                <strong>Phone:</strong> {user?.phone ?? "No phone number provided"}
                </li>
                <li style={{ marginBottom: '1rem' }}>
                <strong>Address:</strong> {
                    (user?.address?.city_state ?? "") + ", " + 
                    (user?.address?.country ?? "No address provided")
                }
                </li>
            </ul>
            </div>
        </Card>
    );
};

export default PersonalInfoSection;