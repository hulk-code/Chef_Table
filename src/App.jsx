

import './App.css'
import Banner from './Component/Banner/Banner'
import Manus from './Component/Manus/Manus'
import Navbar from './Component/Navber/Navbar'
import OrderSideBar from './Component/OrderSideBar/OrderSideBar'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='flex '>
     
        <Manus ></Manus>
        <OrderSideBar></OrderSideBar>
      </div>
    </>
  )
}

export default App
