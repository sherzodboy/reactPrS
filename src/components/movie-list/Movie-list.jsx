import "./Movie-list.css"
import MovieListItem from "../movie-list-item/Movie-list-item"

const MovieList = ({data}) => {
  return (
    <ul className="movie-list">
      {data.map(item => (
        <MovieListItem key={item.id} name={item.name} viewers={item.viewers} favourite={item.favourite} />
      ))}
    </ul>
  )
}

export default MovieList