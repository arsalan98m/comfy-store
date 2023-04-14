import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import { Navbar, Sidebar, Footer } from "./components";

// pages
import {
  AuthWrapper,
  MainLayout,
  HomePage,
  ProductsPage,
  SingleProductPage,
  AboutPage,
  CartPage,
  ErrorPage,
  CheckoutPage,
  PrivateRoute,
} from "./pages";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthWrapper>
          <MainLayout />
        </AuthWrapper>
      ),
      // errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },

        {
          path: "cart",
          element: <CartPage />,
        },

        {
          path: "products",
          element: <ProductsPage />,
        },

        {
          path: "products/:productId",
          element: <SingleProductPage />,
        },

        {
          path: "checkout",
          element: <PrivateRoute />,
          children: [
            {
              index: true,
              element: <CheckoutPage />,
            },
          ],
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
