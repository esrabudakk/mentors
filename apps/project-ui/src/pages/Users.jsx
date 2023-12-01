import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
import {meta} from "eslint-plugin-react/lib/rules/jsx-key.js";

const Users = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`);
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {!users ? (
                <div>Loading</div>
            ) : (
                <div>
                    <Card
                        title="Users"
                        bordered={false}
                        style={{
                            width: 300,
                        }}
                    >
                        <div>
                            {users.map((item) => (
                                <div key={item.id}>{item.firstName}</div>
                            ))}
                        </div>
                    </Card>
                </div>
            )}
        </>
    );
};

export default Users;
