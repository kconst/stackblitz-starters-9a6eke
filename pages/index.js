import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
/**
 * Example retrieval of images from an API and placing them within a page.
 *
 * 1. Retrieve images from an API (https://api.slingacademy.com/v1/sample-data/photos)
 * 1. Limit the images being displayed to nine in total
 * 2. Create a 3x3 grid of the images
 * 3. Add a like button to the bottom right corner of each image, on top of each image
 * 4. Add the ability to toggle the like button to an active state for each image, separately
 */

export default function Home() {
  const [images, setImages] = useState([]);

  async function retrieveImages() {
    const response = await fetch(
      'https://api.slingacademy.com/v1/sample-data/photos'
    );
    const jsonData = await response.json();

    setImages(jsonData.photos);
  }

  useEffect(() => {
    retrieveImages();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Example NextJS App</title>
      </Head>
      <main>
        {images.map((photo, index) => (
          <div key={index}>
            <img src={photo.url} alt={photo.title} />
            <button alt="like" className={styles['like-button']} />
          </div>
        ))}
      </main>
    </div>
  );
}
