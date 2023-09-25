import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/app/components/Layout";
import Navbar from "@/app/components/Navbar";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Title from "@/app/components/Title";
import Link from "next/link";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Layout>
        <Navbar />
        <Breadcrumbs />
        <Title>Users</Title>
        <div className="flex justify-center">
          <ul>
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white shadow-md rounded p-4 mb-4 "
              >
                <li className="flex flex-col ">
                  <strong>Name: </strong>
                  {user.name}
                  <br />
                  <br />

                  <strong>Email: </strong>
                  {user.email}
                  <br />
                  <br />

                  <Link href={`/albums/${user.id}`}>
                    <button className="bg-blue-500 text-white py-2 px-3 rounded mt-2 inline-block">
                      View Albums
                    </button>
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </Layout>
    </div>
  );
};

export default Users;
