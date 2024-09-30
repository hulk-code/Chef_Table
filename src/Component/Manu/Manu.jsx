import { AiOutlineClockCircle } from "react-icons/ai";
import { GiFire } from "react-icons/gi";
import "./Manu.css";

const Manu = ({ manu }) => {
  console.log(manu);
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = manu;
  return (
    <div>
      <div className=" bg-base-100 w-96  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={recipe_image} alt="Shoes" className="rounded-xl h-52" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-serif font-bold ">{recipe_name}</h2>
          <p className="font-thin ">{short_description}</p>
          <hr className=" border-t-2 border-gray-300 w-full" />

          <div>
            <h1 className="mr-44 font-bold">
              ingredients List:{ingredients.length}
            </h1>
            <ul className="list-disc mr-28 ml-6 font-thin font-serif">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="space-x-32 text-sm font-bold flex items-center">
            <span className="flex items-center">
              <AiOutlineClockCircle className="mr-2" /> {preparing_time}
            </span>
            <span className="flex items-center">
              <GiFire className="mr-2" /> {calories}
            </span>
          </div>
          <div className="card-actions">
            <button>Want To Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manu;
