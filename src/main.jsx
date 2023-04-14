import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

// one thing remember for Auth0 Provider:
// Once we setup Auth0 Provider technically
// we don't have to setup the userContext
// we just set it up because we already have
// structure for context we just do it in
// this project, but keep in mind that when
// it comes to Auth0 we can just use the
// hook useAuth0 because all the information
// is gonna be available on this hook

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      cacheLocation='localstorage'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
