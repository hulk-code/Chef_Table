import banner from "../../assets/Banner/Banner.webp";
import { IoFastFood } from "react-icons/io5";
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello foodie's</h1>
            <p className="mb-5 flex items-center gap-4 lg:ml-10 ">
              Savor the Flavors of Our Culinary Delights.
              <IoFastFood className="text-5xl"></IoFastFood>
              <span></span>
            </p>
            <button className='glowing-btn'><span className='glowing-txt'>Ord
                <span className='faulty-letter'>er</span>Now</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
