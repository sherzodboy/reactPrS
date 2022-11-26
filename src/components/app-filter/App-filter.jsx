import { useContext } from "react";
import { Context } from "./../../context/index";
import "./App-filter.css";

const AppFilter = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <div className="btn-group">
      {btnsArr.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${
            state.filter === btn.name ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => dispatch({ type: "ON_FILTER", payload: btn.name })}
          type="button"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

const btnsArr = [
  { name: "all", label: "Barcha kinolar" },
  { name: "popular", label: "Mashxur kinolar" },
  { name: "mostViewrs", label: "Eng ko'p ko'rilgan kinolar" },
];

export default AppFilter;
