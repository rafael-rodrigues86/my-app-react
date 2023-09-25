import React from "react";
import axios from "axios";
import Layout from "@/app/components/Layout";
import Navbar from "@/app/components/Navbar";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Title from "@/app/components/Title";

const UserAlbums = ({ albums }) => {
  return (
    <div>
      <Layout>
        <Navbar />
        <Breadcrumbs />
        <Title>User Albums</Title>
        <div className="flex justify-center">
          <ul>
            {albums.map((album) => (
              <div
                key={album.id}
                className="bg-white shadow-md rounded p-4 mb-4"
              >
                <li>
                  <strong>Title: </strong>
                  {album.title}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { userId } = context.query;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
    const albums = response.data;

    return {
      props: { albums },
    };
  } catch (error) {
    console.error("Error fetching albums:", error);
    return {
      props: { albums: [] },
    };
  }
}

export default UserAlbums;
