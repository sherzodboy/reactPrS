import { useState, useEffect, useContext } from "react";
import AppInfo from "./../app-info/App-info";
import SearchPanel from "./../search-panel/Search-panel";
import AppFilter from "./../app-filter/App-filter";
import MovieList from "../movie-list/Movie-list";
import MoviesAddForm from "./../movies-add-form/Movies-add-form";
import Loader from "./../loader/Loader";
import { Context } from "../../context";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  //eslint-disable-next-line
  const { _, dispatch } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
      .then((response) => response.json())
      .then((json) => {
        const newArr = json.map((item) => ({
          name: item.title.charAt(0).toUpperCase() + item.title.slice(1),
          id: item.id,
          viewers: item.id * 500,
          favourite: false,
          like: false,
        }));
        dispatch({ type: "GET_DATA", payload: newArr });
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
    //eslint-disable-next-line
  }, []);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        {isLoading && <Loader />}
        <MovieList />
        <MoviesAddForm />
      </div>
    </div>
  );
};

export default App;
