"use client"; // Mark this component as a client component

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css"; // Adjust the import based on your structure
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const carouselItems = [
  {
    src: "/asset/Secure-and-Fair-1.webp",
    alt: "Step 1",
    caption: "Step 1: Open the app and create an account."
  },
  {
    src: "/asset/Online-Teen-Patti.webp",
    alt: "Step 2",
    caption: "Step 2: Choose your preferred game mode."
  },
  {
    src: "/asset/Cards-in-Hand-Victory-in-Mind.webp",
    alt: "Step 3",
    caption: "Step 3: Invite friends or join an online game."
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Download Teen Patti</title>
        <meta name="description" content="Download Teen Patti, the ultimate card game for your mobile device!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Download Teen Patti <a href="https://teenpattigames.xyz/teen-patti-master-download/" className={styles.downloadButton}>Download</a></h1>
        <p>The ultimate card game experience!</p>
      </header>

      <section className={styles.carouselSection}>
        <h2 className={"text-white"}>Teen Patti Master 2024</h2>
        <div className={`carousel`}>
          <div className={`carousel-inner`}>
            {carouselItems.map((item, index) => (
              <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                <Image className={'img-fluid'} src={item.src} alt={item.alt} width={600} height={400} />
                <div className="carousel-caption d-none d-md-block">
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" onClick={prevSlide}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" onClick={nextSlide}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <main className={styles.main}>
        <section className={styles.infoSection}>
          <h2>About Teen Patti</h2>
          <p>
            Teen Patti is a popular Indian card game that brings together friends and family for hours of fun and excitement.
            With stunning graphics, smooth gameplay, and multiple game modes, Teen Patti offers a thrilling experience for players of all skill levels.
            Teen Patti Master isn’t just a game; it’s a modern take on the beloved traditional card game. Welcome to the thrilling world of Teen Patti Games, where traditional card gaming meets innovation and excitement. Teen Patti, a beloved Indian card game, has taken a bold step forward with the emergence of Teen Patti App.
          </p>
        </section>

        <section className={styles.tableSection}>
          <h2>Game Features</h2>
          <table className={styles.featuresTable}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Multiplayer</td>
                <td>Play with friends or join online rooms.</td>
              </tr>
              <tr>
                <td>Graphics</td>
                <td>Stunning graphics and immersive gameplay.</td>
              </tr>
              <tr>
                <td>Games</td>
                <td>Multiple game modes: Classic, Joker, and more.</td>
              </tr>
              <tr>
                <td>Events</td>
                <td>Regular updates and exciting events.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.downloadSection}>
          <h2>Download Now</h2>
          <p>Click the button below to download Teen Patti and start playing today!</p>
          <a href="https://teenpattigames.xyz/teen-patti-master-download/" className={styles.downloadButton}>Download for Android</a>
        </section>
      </main>

      <footer className={styles.footer}>
        <h1>Teen Patti Master 2024</h1>
        <p>&copy; 2024 Teen Patti. All rights reserved.</p>
      </footer>
    </div>
  );
}
