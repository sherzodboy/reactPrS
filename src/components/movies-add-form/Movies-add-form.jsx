import {Component} from  "react"
import "./Movies-add-form.css"

class MoviesAddForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      views: "",
    }
  }

  changeHandlerINput = e => {
    this.setState = ({
      [e.target.value]: e.target.name
    })
  }



  render() {
    const {name, views} = this.state

    return (
      <div className="movies-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex">
          <input 
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday kino?" 
            name="name"
            onChange={this.changeHandlerINput} 
            value={name} 
          />
          <input 
            type="number" 
            className="form-control new-post-label" 
            placeholder="Nechi marta ko'rilgan kino?" 
            name="views" 
            onChange={this.changeHandlerINput} 
            value={views} 
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    )
  }
}
console.log(1221233454);

export default MoviesAddForm