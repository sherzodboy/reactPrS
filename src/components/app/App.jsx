import { useState } from "react";
import AppInfo from "./../app-info/App-info";
import SearchPanel from "./../search-panel/Search-panel";
import AppFilter from "./../app-filter/App-filter";
import MovieList from "../movie-list/Movie-list";
import MoviesAddForm from "./../movies-add-form/Movies-add-form";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const App = () => {
  const [data, setData] = useState(arr);

  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const onDelete = (id) => {
    const newArr = data.filter((c) => c.id !== id);
    setData(newArr);
  };

  const addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
    };
    const newArr = [...data, newItem];
    setData(newArr);
  };

  const onToggleProp = (id, prop) => {
    const newArr = data.map((item) => {
      if (item.id === id) return { ...item, [prop]: !item[prop] };
      return item;
    });
    setData(newArr);
  };

  const searchHandler = (arr, term) => {
    if (term === 0) {
      return arr;
    }

    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  const filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like);
      case "mostViewrs":
        return arr.filter((c) => c.viewers > 1000);
      default:
        return arr;
    }
  };

  const updateTermHandler = (term) => setTerm(term);
  const updateFilterHandler = (filter) => setFilter(filter);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo
          allMoviesCount={data.length}
          favouriteMovieCount={data.filter((c) => c.favourite).length}
        />
        <div className="search-panel">
          <SearchPanel updateTermHandler={updateTermHandler} />
          <AppFilter
            filter={filter}
            updateFilterHandler={updateFilterHandler}
          />
        </div>
        <MovieList
          onToggleProp={onToggleProp}
          data={filterHandler(searchHandler(data, term), filter)}
          onDelete={onDelete}
        />
        <MoviesAddForm addForm={addForm} />
      </div>
    </div>
  );
};

export default App;

const arr = [
  {
    name: "You are Mine",
    viewers: 123,
    favourite: false,
    id: 1,
    like: false,
  },
  {
    name: "One world one boat",
    viewers: 1234,
    favourite: false,
    id: 2,
    like: false,
  },
  {
    name: "Empire of Osman",
    viewers: 12345,
    favourite: false,
    id: 3,
    like: false,
  },
];
