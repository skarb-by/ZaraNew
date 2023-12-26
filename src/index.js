import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productContext";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './context/index.js';
import './firebase';
const App = React.lazy(() => import("./App"));
const rootNode = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootNode)

root.render(
  <StrictMode>
    <Provider store={store}>
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </Provider>
  </StrictMode>
);

reportWebVitals();