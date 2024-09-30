import { useEffect, useState } from "react";
import Manu from "../Manu/Manu";

const Manus = () => {
  const [manus, setManus] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setManus(data));
  }, []);
  return <div className="w-2/3">
         <h1 className="text-5xl font-bold text-center">Our Manu's</h1>
          <div>
            {
                manus.map(manu => <Manu 
                    key={manu.recipe_id} 
                     manu={manu}></Manu>)
            }
          </div>
      


  </div>;
};

export default Manus;
