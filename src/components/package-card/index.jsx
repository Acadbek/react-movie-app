import React from "react";

const PackageCard = (props) => {
  return (
    <div
      className="rounded-3xl max-h-[520px] py-6 pl-6 pr-9 w-full"
      style={{
        backgroundImage: `url(${props.background})`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
      }}
    >
      <div className="bg-[#3A78C9] rounded-3xl ml-[75%] text-white py-2 px-4 w-[137px] text-sm flex justify-center items-center">
        {props.package}
      </div>
      <div className="bg-white p-6 rounded-3xl mt-[100px] opacity-70 max-w-[345px]">
        <div className="flex items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 325 304"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M146.282 57.2539V82.4844H132.696V57.2539H146.282Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M146.282 250.365V275.595H132.696V250.365H146.282Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M146.282 5.82239V31.0529H132.696V5.82239H146.282Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M164.72 13.5857L114.259 13.5857L114.259 1.07903e-07L164.72 0L164.72 13.5857Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M146.282 98.9813V172.732H132.696V98.9813H146.282Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M145.312 172.732L71.5607 172.732L71.5607 159.146L145.312 159.146L145.312 172.732Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M56.0343 172.732L30.8038 172.732L30.8037 159.147L56.0342 159.146L56.0343 172.732Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M138.519 286.269C204.975 286.269 258.849 232.396 258.849 165.939C258.849 99.4827 204.975 45.609 138.519 45.609C72.0622 45.609 18.1885 99.4827 18.1885 165.939C18.1885 232.396 72.0622 286.269 138.519 286.269ZM138.519 303.737C214.622 303.737 276.316 242.043 276.316 165.939C276.316 89.8358 214.622 28.1417 138.519 28.1417C62.4152 28.1417 0.721191 89.8358 0.721191 165.939C0.721191 242.043 62.4152 303.737 138.519 303.737Z"
              fill="white"
            />
          </svg>
          <p>{props.day}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 325 304"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M146.282 57.2539V82.4844H132.696V57.2539H146.282Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M146.282 250.365V275.595H132.696V250.365H146.282Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M146.282 5.82239V31.0529H132.696V5.82239H146.282Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M164.72 13.5857L114.259 13.5857L114.259 1.07903e-07L164.72 0L164.72 13.5857Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M146.282 98.9813V172.732H132.696V98.9813H146.282Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M145.312 172.732L71.5607 172.732L71.5607 159.146L145.312 159.146L145.312 172.732Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M56.0343 172.732L30.8038 172.732L30.8037 159.147L56.0342 159.146L56.0343 172.732Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M138.519 286.269C204.975 286.269 258.849 232.396 258.849 165.939C258.849 99.4827 204.975 45.609 138.519 45.609C72.0622 45.609 18.1885 99.4827 18.1885 165.939C18.1885 232.396 72.0622 286.269 138.519 286.269ZM138.519 303.737C214.622 303.737 276.316 242.043 276.316 165.939C276.316 89.8358 214.622 28.1417 138.519 28.1417C62.4152 28.1417 0.721191 89.8358 0.721191 165.939C0.721191 242.043 62.4152 303.737 138.519 303.737Z"
              fill="white"
            />
          </svg>
          <p>{props.location}</p>
        </div>
        <p className="text-[#223645] text-[22px] mt-3 font-bold">
          {props.title}
        </p>
        <p className="text-[15px] text-[#626672] break-words mt-3">
					{props.desc}
        </p>
        <p className="text-[#3A78C9] font-bold text-[22px] mt-3">
          {props.price}
        </p>
        <button className="uppercase bg-[#3A78C9] text-white py-2 px-4 mt-3 text-base rounded-3xl flex items-center justify-center">
          order online
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
