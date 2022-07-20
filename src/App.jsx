import { Container } from "./main-styles/styles";
import Card from "./components/card";
import Navbar from "./components/navbar";
import PackageCard from "./components/package-card";
import SecondCard from "./components/second-card";

import background from "./assets/photos/card1.jpg";
import backgroundPackage from "./assets/photos/sydney.jpg";

function App() {
  const array = [
    {
      img: background,
      location: "gavayi orollari",
      title: "dengiz bo'ylari va manzaralari",
    },
    {
      img: background,
      location: "gavayi orollari",
      title: "dengiz bo'ylari va manzaralari",
    },
    {
      img: background,
      location: "gavayi orollari",
      title: "dengiz bo'ylari va manzaralari",
    },
  ];
  const data = [
    {
      img: backgroundPackage,
      package: "Contact us 12%",
      day: "8 day",
      location: "Samarqand",
      title: "TOUR TO SATORINI",
      desc: "Malesuada incidunt excepturi proident quo eros? Id interd...",
      price: "Price: 16,653,000 so'm or $1525 $1255",
    },
    {
      img: backgroundPackage,
      package: "Contact us 12%",
      day: "8 day",
      location: "Samarqand",
      title: "TOUR TO SATORINI",
      desc: "Malesuada incidunt excepturi proident quo eros? Id interd...",
      price: "Price: 16,653,000 so'm or $1525 $1255",
    },
    {
      img: backgroundPackage,
      package: "Contact us 12%",
      day: "8 day",
      location: "Samarqand",
      title: "TOUR TO SATORINI",
      desc: "Malesuada incidunt excepturi proident quo eros? Id interd...",
      price: "Price: 16,653,000 so'm or $1525 $1255",
    },
  ];
  return (
    <div>
      <Navbar />
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {array.map((item) => (
            <Card
              background={item.img}
              location={item.location}
              title={item.title}
              showPrice={false}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 md:gap-8">
          {data.map((item) => (
            <PackageCard
              className="col-span-6"
              background={item.img}
              package={item.package}
              day={item.day}
              location={item.location}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
        <SecondCard />
      </Container>
    </div>
  );
}

export default App;
