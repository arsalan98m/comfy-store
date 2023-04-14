import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  // *** Add to Car *** //
  if (action.type == ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;

    // we have same item with different colors in cart
    // thats why we are using color with id.
    // checking if item is already in the cart
    const tempItem = state.cart.find((product) => product.id === id + color);

    // if item is in the cart then do update the amount value
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + 1;

          // we always need to check our stock
          // inside newItem we are placing stock in max property
          // if amount value is bigger than the max
          // then the amount value is equal to the max

          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }

          return { ...cartItem, amount: newAmount };
        }
        return cartItem;
      });

      return { ...state, cart: tempCart };
    } else {
      // adding new item to the cart
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        max: product.stock,
        price: product.price,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  // *** Remove Cart  *** //
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter(
      (cartItem) => cartItem.id != action.payload
    );

    return { ...state, cart: tempCart };
  }

  // *** Clear Cart  *** //
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  // *** Toggle Amount of Item  *** //
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id == id) {
        if (value == "inc") {
          let newAmount = cartItem.amount + 1;
          if (newAmount > cartItem.max) {
            newAmount = max;
          }
          return { ...cartItem, amount: newAmount };
        }

        if (value == "dec") {
          let newAmount = cartItem.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...cartItem, amount: newAmount };
        }
      }

      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  // *** Calculating total cart items and amount  *** //
  if (action.type === COUNT_CART_TOTALS) {
    const { total_amount, total_items } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_amount: 0,
        total_items: 0,
      }
    );

    return { ...state, total_amount, total_items };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
