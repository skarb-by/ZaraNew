import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";
import "../styles/Sort.css";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();

  return (
    <section className="Sort">
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={!grid_view ? "active sort-btn" : " sort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">
        <p>{`Доступно: ${filter_products.length}`}</p>
      </div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={sorting}
          >
            <option value="lowest">Цена(самая низкая)</option>
            <option value="#" disabled></option>
            <option value="highest">Цена(самая высокая)</option>
            <option value="#" disabled></option>
            <option value="a-z">По алфавиту(а-я)</option>
            <option value="#" disabled></option>
            <option value="z-a">По алфавиту(я-а)</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default React.memo(Sort);
