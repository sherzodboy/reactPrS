import "./Movies-add-form.css"

const MoviesAddForm = () => {
  return (
    <div className="movies-add-form">
      <h3>Yangi kino qo'shish</h3>
      <form className="add-form d-flex">
        <input type="text" className="form-control new-post-label" placeholder="Qanday kino?" />
        <input type="number" className="form-control new-post-label" placeholder="Nechi marta ko'rilgan kino?" />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  )
}

export default MoviesAddForm