import { useState } from "react";
import "./Movies-add-form.css";

const MoviesAddForm = ({ addForm }) => {
  const [state, setState] = useState({ name: "", views: "" });

  const changeHandlerINput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addFormHandler = (e) => {
    if (state.name === "" || state.views === "") return;
    e.preventDefault();
    const data = {
      name: state.name.charAt(0).toUpperCase() + state.name.slice(1),
      viewers: state.views,
    };
    addForm(data);
    setState({ name: "", views: "" });
  };

  return (
    <div className="movies-add-form">
      <h3>Yangi kino qo'shish</h3>
      <form className="add-form d-flex" onSubmit={addFormHandler}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino?"
          onChange={changeHandlerINput}
          name="name"
          value={state.name}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Nechi marta ko'rilgan kino?"
          onChange={changeHandlerINput}
          name="views"
          value={state.views}
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default MoviesAddForm;
