import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../Utils/Axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailorUrl, setTrailorUrl] = useState("");
  const baseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("Error: ", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailorUrl) {
      setTrailorUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailorUrl(urlParams.get("v"));
        }
      );
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1> {/* Corrected the string interpolation */}
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => {
              handleClick(movie);
            }}
            key={index}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster${isLargeRow && " row_posterLarge"}`} // Fixed className formatting
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailorUrl && <YouTube videoId={trailorUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;