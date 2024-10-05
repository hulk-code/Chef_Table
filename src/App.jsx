import { useState } from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Footer from "./Component/Footer/Footer";
import Manus from "./Component/Manus/Manus";
import Navbar from "./Component/Navber/Navbar";
import OrderSideBar from "./Component/OrderSideBar/OrderSideBar";
import Carosel from "./Component/Carosel/Carosel";
import CustomerReview from "./Component/CustomerReview/CustomerReview";
import MontlySell from "./Component/MontlySell/MontlySell";

function App() {
  const [orders, setOrders] = useState([]);

  const handleOrder = order => {
    // console.log("hit the button",order);
    const newOrder=[...orders , order]
    setOrders(newOrder)
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="lg:flex ">
        <Manus handleOrder={handleOrder}></Manus>
        <OrderSideBar orders={orders}></OrderSideBar>
      </div>
      <Carosel></Carosel>
      <CustomerReview></CustomerReview>
      <MontlySell></MontlySell>
      <Footer></Footer>
    </>
  );
}

export default App;
