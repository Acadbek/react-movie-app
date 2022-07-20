import React from "react";
import background from "../../assets/photo/card.jpg";
import ReactStars from "react-rating-stars-component";

const Card = (props) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${props.background})`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
      }}
      className="w-full rounded-3xl p-6 min-h-[425px] relative"
    >
      <div className="relative px-5 py-6 bg-white w-full rounded-3xl mt-[100%]">
        <div className="absolute top-[-15px] flex items-center justify-center right-[20px] w-[124px] h-[33px] bg-[#3A78C9] rounded-3xl">
          <ReactStars
            count={5}
            size={22}
            isHalf={true}
            onChange={ratingChanged}
            activeColor="#ffd700"
          />
        </div>
        <p className="text-[#0085BA] text-[13px] uppercase">{props.location}</p>
        <p className="text-[22px] font-bold text-[#223645] uppercase leading-6 mt-2">
          {props.title}
        </p>
        {props.showPrice ? (
          <p className="text-[15px] text-[#626672] font-normal mt-2">
            10 920 so'm / $1
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Card;
