// libraries/packages
import React, { useEffect, useContext, useReducer } from "react";

// reducer function
import reducer from "../reducers/filter_reducer";

// action types
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

// useProductsContext where we fetched all products
import { useProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { products } = useProductsContext();

  // Running this useEffect on initially load
  // and every time when products are changes
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  // Running this on initially load and every time
  // when the sort/filters values are changing
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    // for demonstration
    // const name = e.target.name;
    const value = e.target.value;

    dispatch({ type: UPDATE_SORT, payload: value });
  };

  // filters functionality
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "category") {
      value = e.target.textContent;
    }

    if (name == "color") {
      value = e.target.dataset.color;
    }

    if (name == "price") {
      value = Number(value);
    }

    if (name == "shipping") {
      value = e.target.checked;
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
