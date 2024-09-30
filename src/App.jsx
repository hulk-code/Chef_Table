

import './App.css'
import Banner from './Component/Banner/Banner'
import Footer from './Component/Footer/Footer'
import Manus from './Component/Manus/Manus'
import Navbar from './Component/Navber/Navbar'
import OrderSideBar from './Component/OrderSideBar/OrderSideBar'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='lg:flex '>
     
        <Manus ></Manus>
        <OrderSideBar></OrderSideBar>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
