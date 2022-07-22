import React from "react";
import img from "../../assets/photos/packageSam.jpg";
import ReactStars from "react-rating-stars-component";

const SecondCard = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="flex justify-between items-center rounded-3xl border border-black">
      <div>
        <img className="rounded-3xl" src={img} alt="" />
      </div>
      <div>
        <h1 className="uppercase">SUMMER HOLIDAY TO THE OXOLOTAN RIVER</h1>
        <p>
          Malesuada incidunt excepturi proident quo eros? Id interdum praesent
          magnis, eius ...
        </p>
      </div>
      <div className="bg-[#568BD0]">
        <ReactStars
          count={5}
          size={22}
          isHalf={true}
          onChange={ratingChanged}
          activeColor="#ffd700"
        />
        <p>10,920,000 so'mor $1000</p>4
        <button className="border-2 border-white px-4 py-2 rounded-3xl">
          Order online
        </button>
      </div>
    </div>
  );
};

export default SecondCard;
