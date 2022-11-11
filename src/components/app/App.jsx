import "./App.css"
import AppInfo from './../app-info/App-info';
import SearchPanel from './../search-panel/Search-panel';
import AppFilter from "./../app-filter/App-filter"
import MovieList from "../movie-list/Movie-list";
import MoviesAddForm from './../movies-add-form/Movies-add-form';

const App = () => {
  const data = [
      {name: "You are Mine", viewers: 123, favourite: false, id: 1},
      {name: "One world one boat", viewers: 1234, favourite: false, id: 2},
      {name: "Empire of Osman", viewers: 12345, favourite: true, id: 3},
  ]

  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo />  
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data={data} />
        <MoviesAddForm />
      </div> 
    </div>
  )
};

export default App;
