import MovieListItem from "../movie-list-item/Movie-list-item";
import { useContext } from "react";
import { Context } from "./../../context/index";
import { filterHandler, searchHandler } from "../../utilities/data";
import "./Movie-list.css";

const MovieList = () => {
  const { state } = useContext(Context);

  const data = filterHandler(
    searchHandler(state.data, state.term),
    state.filter
  );

  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem {...item} />
      ))}
    </ul>
  );
};

export default MovieList;
