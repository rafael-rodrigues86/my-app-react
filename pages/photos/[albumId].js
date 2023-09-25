import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/app/components/Layout";
import Navbar from "@/app/components/Navbar";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Title from "@/app/components/Title";

const AlbumPhotos = ({ photos }) => {
  return (
    <div>
      <Layout>
        <Navbar />
        <Breadcrumbs />
        <Title>Album Photos</Title>
        <div>
          <ul>
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white shadow-md rounded p-4 mb-4"
              >
                <li>
                  <strong>Title: </strong>
                  {photo.title}
                  <br />
                  <img src={photo.thumbnailUrl} alt={photo.title} />
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
  const { albumId } = context.query;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
    const photos = response.data;

    return {
      props: { photos },
    };
  } catch (error) {
    console.error("Error fetching photos:", error);
    return {
      props: { photos: [] }, // Retorna um array vazio em caso de erro
    };
  }
}

export default AlbumPhotos;
