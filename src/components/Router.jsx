import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout ";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Singleproduct from "../pages/Singleproduct";
import Cartpage from "../pages/Cartpage";
import Addproduct from "../pages/Addproduct";
import About from "../pages/About";
import { useState } from "react";
function Router() {
  const[cart,setCart]=useState([])
  const[cartCopy,setCartCopy]=useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout cart={cart} setCart={setCart} cartCopy={cartCopy} setCartCopy={setCartCopy}>
              <Home cart={cart} setCart={setCart} cartCopy={cartCopy} setCartCopy={setCartCopy}/>
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout cart={cart} setCart={setCart} cartCopy={cartCopy} setCartCopy={setCartCopy}>
              <Shop cart={cart} setCart={setCart} cartCopy={cartCopy} setCartCopy={setCartCopy}/>
            </Layout>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        ></Route>
        <Route
          path="/singleproduct"
          element={
            <Layout>
              <Singleproduct />
            </Layout>
          }
        ></Route>
        <Route
        path="/cart"
        element={
          <Layout>
            <Cartpage cart={cart} setCart={setCart} cartCopy={cartCopy} setCartCopy={setCartCopy}/>
          </Layout>
        }
        ></Route>
        <Route
        path="/add-product"
        element={
          <Layout>
            <Addproduct/>
          </Layout>
        }
        >
        </Route>
        <Route 
        path="/about"
        element={
          <Layout>
            <About/>
          </Layout>
        } 
        ></Route>

       
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
