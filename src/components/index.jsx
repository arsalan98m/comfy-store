// shared components
import {
  Navbar,
  Sidebar,
  Error,
  Footer,
  CartButtons,
  PageHero,
  Loading,
  Product,
  AmountButtons,
  ProductShimmer,
  CustomSkeleton,
} from "./shared";

// home components
import { Hero, FeaturedProducts, Services, Contact } from "./home";

// single product components
import { ProductImages, Stars, AddToCart } from "./single_product";

//  product components
import { GridView, ListView, Filters, ProductList, Sort } from "./products";

// cart
import { CartColumns, CartContent, CartItem, CartTotals } from "./cart";

// checkout
import { StripeCheckout } from "./checkout";

export {
  Product,
  FeaturedProducts,
  Navbar,
  CartButtons,
  Footer,
  Sidebar,
  Hero,
  Services,
  Contact,
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Filters,
  ProductList,
  Sort,
  Stars,
  CartContent,
  PageHero,
  StripeCheckout,
  GridView,
  ListView,
  CartColumns,
  CartItem,
  CartTotals,
  AmountButtons,
  ProductShimmer,
  CustomSkeleton,
};
