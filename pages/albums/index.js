import React, { useState } from "react";
import axios from "axios";
import Layout from "@/app/components/Layout";
import Navbar from "@/app/components/Navbar";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Title from "@/app/components/Title";
import Link from "next/link";

const Albums = () => {
  const [userId, setUserId] = useState("");
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);

  const handleGetAlbums = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
      );
      setAlbums(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  const handleGetPhotos = async (albumId) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      );
      setPhotos(response.data);
      setSelectedAlbum(albumId);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  return (
    <div>
      <Layout>
        <Navbar />
        <Breadcrumbs />
        <Title>Albums</Title>
        <form
          className="max-w-md mx-auto space-y-4 m-8"
          onSubmit={handleGetAlbums}
        >
          <input
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="p-4 mr-4"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Get Albums
          </button>
        </form>

        <div>
          <ul>
            {albums.map((album) => (
              <div
                key={album.id}
                className="bg-white shadow-md rounded p-4 mb-4"
              >
                <li>
                  <strong>Title: </strong>
                  {album.title}
                  <br />
                  <Link href={`/photos/${album.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      View Photos
                    </button>
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>

        {selectedAlbum && (
          <div>
            <h2>Photos from Album {selectedAlbum}</h2>
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
        )}
      </Layout>
    </div>
  );
};

export default Albums;
