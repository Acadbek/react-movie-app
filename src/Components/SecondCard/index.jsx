import React from "react";
import img from "../../assets/photo/sma.jpg";
import ReactStars from "react-rating-stars-component";

const SecondCard = (props) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-12 grid-rows-1 rounded-3xl h-80 mb-10">
      <div className="col-span-5 rounded-3xl border-r-5 border-blue-400">
        <img
          src={props.img}
          alt="There should be a img here"
          className="md:rounded-tl-3xl md:rounded-tr-none rounded-t-3xl md:rounded-bl-3xl w-full h-full object-cover"
        />
      </div>
      <div className="col-span-4 flex items-center justify-center flex-col py-5 px-4 bg-[#e8ecf5]">
        <h1 className="text-[#1e635c] text-[25px] font-extrabold">
          {props.title}
        </h1>
        <p className="mt-4 text-[#626672] font-medium">
          {props.description}
        </p>
        <p className="shadow-lg mt-7 text-[13px] bg-white px-3 py-1 rounded-full text-[#535252]">
          {" "}
          {props.day} | {props.location}
        </p>
      </div>
      <div className="col-span-3 rounded-tr-3xl px-2 text-center rounded-br-3xl flex items-center justify-center flex-col bg-[#00a795]">
        <ReactStars size={22} onChange={ratingChanged} />
        <p className="text-white text-[20px] font-bold mt-2">
          {props.price}
        </p>
        <p className="text-white text-sm font-bold">/ {props.forHowMany}</p>
        <button className="mt-4 border-2 border-white font-semibold px-4 py-2 rounded-3xl hover:text-[#e7e3e3] text-white">
          Buyurtma Berish
        </button>
      </div>
    </div>
  );
};

export default SecondCard;
