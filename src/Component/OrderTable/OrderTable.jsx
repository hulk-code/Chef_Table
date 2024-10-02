// const OrderTable = ({ order, index,handleonPrepare }) => {
//     const {
//       recipe_name,
//       preparing_time,
//       calories,
//     } = order;
  
//     return (
//       <tr className="hover">
//         <td>{index + 1}</td> {/* Column 1: Serial Number */}
//         <td>{recipe_name}</td> {/* Column 2: Recipe Name */}
//         <td>{preparing_time}</td> {/* Column 3: Preparing Time */}
//         <td>{calories}</td> {/* Column 4: Calories */}
//         <button className="btn btn-outline btn-secondary" onClick={() =>handleonPrepare(order)}>
//           Prepared
//         </button>
//       </tr>
//     );
//   };
  
//   export default OrderTable;
import { useState } from "react";

const OrderTable = ({ order, index, handleonPrepare }) => {
  const {
    recipe_name,
    preparing_time,
    calories,
  } = order;

 
  const [isDisabled, setIsDisabled] = useState(false);

  const handlePrepareClick = () => {
    handleonPrepare(); 
    setIsDisabled(true); 
  };

  return (
    <tr className="hover">
      <td>{index + 1}</td> 
      <td>{recipe_name}</td>
      <td>{preparing_time}</td> 
      <td>{calories}</td> 
      <td>
        <button
          className="btn btn-outline btn-secondary"
          onClick={handlePrepareClick}
          disabled={isDisabled} 
        >
          Prepared
        </button>
      </td>
    </tr>
  );
};

export default OrderTable;

  