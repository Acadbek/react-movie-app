import React from "react";
import {
  DestinationItem,
  DestinationItemChild,
  DestinationRow,
} from "./DestinationStyle";

const Destination = () => {
  let destination = [
    {
      image:
        "	http://www.xondoppitravel.com/frontend/web/images/producton/gallery/2/2/medium.jpg?_=14115744",
      countryName: "SAUDIYA ARABISTONi",
      title: "SAUDIYA ARABISTONIDAGI MANZARALAR",
      price: "10 920 so'm / $1",
      rating: "* * * * *",
    },
    {
      image:
        "	http://www.xondoppitravel.com/frontend/web/images/producton/gallery/3/28/medium.jpg?_=2949448056      ",
      countryName: "Misr",
      title: "QADIMIY YODGORLIKLAR",
      price: "10 920 000 so'm / $1000",
      rating: "* * * *",
    },
    {
      image:
        "	http://www.xondoppitravel.com/frontend/web/images/producton/gallery/4/32/medium.jpg?_=2765882161      ",
      countryName: "GAVAYI OROLLARI",
      title: "DENGIZ BO'YLARI VA MANZARALAR",
      price: "21 840 000 so'm / $2000",
      rating: "* * * ",
    },
    {
      image: "	 ",
      countryName: "DUBAI",
      title: "HUSHMANZARA JOYLAR",
      price: "5 460 000 so'm / $500",
      rating: "* * * * *",
    },
  ];
  return (
    <DestinationRow>
      {destination.map((item, index) => (
        <DestinationItem
          key={index}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          <DestinationItemChild>
            <div className="rating_star">
              <i>{item.rating}</i>
            </div>
            <span
              style={{
                color: "#0085BA",
                fontSize: "13px",
                textTransform: "uppercase",
                fontWeight: "500",
                display: "block",
              }}
            >
              {item.countryName}
            </span>
            <h3>
              {" "}
              <a href="#">{item.title}</a>
            </h3>
            <p>{item.price}</p>
          </DestinationItemChild>
        </DestinationItem>
      ))}
    </DestinationRow>
  );
};

export default Destination;
