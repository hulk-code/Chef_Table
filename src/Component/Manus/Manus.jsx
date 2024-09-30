import { useEffect, useState } from "react";
import Manu from "../Manu/Manu";

const Manus = () => {
  const [manus, setManus] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setManus(data));
  }, []);
  return <div className="lg:w-2/3">
         <h1 className="text-5xl font-bold text-center m-6 ">Our Manu's</h1>
         <hr className=" border-t-2 border-gray-300 w-full" />

          <div className=" grid lg:grid-cols-2 gap-5">
            {
                manus.map(manu => <Manu 
                    key={manu.recipe_id} 
                     manu={manu}></Manu>)
            }
          </div>
      


  </div>;
};

export default Manus;
