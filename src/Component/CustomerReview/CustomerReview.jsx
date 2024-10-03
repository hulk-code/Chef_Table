import client from "../../assets/client/client.jpeg";
import client2 from "../../assets/client/client1.jpg";
const CustomerReview = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-center m-10">
          Happy Customer's Reviews
        </h1>
        <div className="lg:flex ">
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={client} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">
                  {" "}
                  A Taste of Italy: The Perfect Spaghetti Carbonara at La
                  Trattoria
                </h1>
                <p className="py-6">
                  If you're looking for the quintessential Italian comfort food
                  experience, La Trattoria's Spaghetti Carbonara is a must-try.
                  From the very first bite, the rich, creamy sauce, made with
                  just the right balance of egg yolks and Pecorino Romano,
                  envelops your palate in pure bliss. The crisp, smoky pancetta
                  adds the perfect amount of saltiness and texture, while the
                  freshly cracked black pepper elevates each mouthful with a
                  pleasant spice.
                </p>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img src={client2} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">
                  Sushi Perfection: The Signature Omakase at Sushi Zen
                </h1>
                <p className="py-6">
                  f you're a sushi lover in search of a premium dining
                  experience, look no further than the Signature Omakase at
                  Sushi Zen. This chef-curated tasting menu is nothing short of
                  a journey through the finest offerings of the sea, each bite
                  more exquisite than the last.
                </p>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
