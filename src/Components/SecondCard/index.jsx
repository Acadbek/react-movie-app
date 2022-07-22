import React from "react";
import ReactStars from "react-rating-stars-component";

const SecondCard = (props) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-1 rounded-3xl h-64 mb-10">
      <div className="col-span-5 rounded-3xl border-r-5 border-blue-400">
        <img
          src={props.img}
          alt="There should be a img here"
          className="md:rounded-tl-3xl md:rounded-tr-none rounded-t-3xl md:rounded-bl-3xl w-full h-full object-cover"
        />
      </div>
      <div className="col-span-4 flex items-center justify-center flex-col py-5 px-4 md:text-left text-center bg-[#e8ecf5]">
        <h1 className="text-[#1e635c] text-[18px] font-extrabold md:text-[25px]">
          {props.title}
        </h1>
        <p className="mt-4 text-[#626672] md:text-base text-[14px] md:text-left text-center font-medium">
          {props.description}
        </p>
        <p className="shadow-lg mt-7 md:text-[13px] text-[11px] bg-[#fff] px-3 py-1 rounded-full text-[#535252]">
          {props.day} | {props.location}
        </p>
      </div>
      <div className="col-span-3 md:rounded-tr-3xl md:rounded-bl-none rounded-b-3xl px-2 py-4 text-center rounded-br-3xl flex items-center justify-center flex-col bg-green">
        <ReactStars size={22} onChange={ratingChanged} />
        <p className="text-[#fff] text-[20px] font-bold mt-2">{props.price}</p>
        <p className="text-[#fff] text-sm font-bold">/ {props.forHowMany}</p>
        <button className="mt-4 md:border-2 border-[1px] border-[#fff] font-semibold md:px-4 md:py-2 px-3 py-1 md:text-base text-[14px] rounded-3xl hover:text-[#e7e3e3] text-[#fff]">
          Buyurtma Berish
        </button>
      </div>
    </div>
  );
};

export default SecondCard;
