import React from "react";
import Row from "../Row/Row";
import "./RowList.css";
import requests from "../../../Utils/requests";

const RowList = () => {
  return (
    <div className="row-list">
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Netflix Trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title="Netflix Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow={true}
      />
      <Row
        title="Netflix Action"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="Netflix Comedy"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true}
      />
      <Row
        title="Netflix Horror"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
      <Row
        title="Netflix Romance"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
      <Row
        title="Netflix TV Show"
        fetchUrl={requests.fetchTvShow}
        isLargeRow={true}
      />
      <Row
        title="Netflix Documentary"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true}
      />
    </div>
  );
};
export default RowList;