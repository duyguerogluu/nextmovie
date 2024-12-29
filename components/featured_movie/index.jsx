import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import styles from "./styles.module.css";

function FeaturedMovie({ movie = {}, isCompact = true }) {
  const { poster_path, title, overview } = movie;

  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>
          Play
        </Link>
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://media.istockphoto.com/id/1372681569/photo/hands-holding-a-film-slate-directing-a-movie-scene.jpg?s=612x612&w=0&k=20&c=9BdhPvpFLgmzGF44AUwZUKaQW4Q3tclAUcE3Zvac8IY=`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
}

export { FeatureMovieLoading } from "./loading";
export { FeaturedMovie };