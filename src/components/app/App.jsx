import { Component } from "react";
import AppInfo from "./../app-info/App-info";
import SearchPanel from "./../search-panel/Search-panel";
import AppFilter from "./../app-filter/App-filter";
import MovieList from "../movie-list/Movie-list";
import MoviesAddForm from "./../movies-add-form/Movies-add-form";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({ data: data.filter((c) => c.id !== id) }));
  };

  addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
    };
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) return { ...item, [prop]: !item[prop] };
        return item;
      }),
    }));
  };

  render() {
    const { data } = this.state;
    const allMoviesCount = data.length;
    const favouriteMovieCount = data.filter((c) => c.favourite).length;

    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo
            allMoviesCount={allMoviesCount}
            favouriteMovieCount={favouriteMovieCount}
          />
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList
            onToggleProp={this.onToggleProp}
            data={data}
            onDelete={this.onDelete}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
