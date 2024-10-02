import { useState } from "react";
import OrderTable from "../OrderTable/OrderTable";
// import NewTable from "../NewTable/NewTable";

const OrderSideBar = ({ orders }) => {
  // const [preOreder, setPreOrder] = useState([]);

  // const handleonPrepare = (ready) => {
  //     const newReady=[...preOreder ,ready]
  //     setPreOrder(newReady)
  //     console.log(newReady);
  // };
  return (
    <div className="w-1/3">
      <p className="text-3xl font-bold text-center lg:m-10">
        Ready To Cook: {orders.length}
      </p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderTable
                key={order.recipe_id}
                index={index}
                order={order}
                // handleonPrepare={handleonPrepare}
              />
            ))}
          </tbody>
        </table>
        {/* <div className="m-10">
          <NewTable preOreder={preOreder} ></NewTable>

        </div> */}
      </div>
    </div>
  );
};

export default OrderSideBar;
