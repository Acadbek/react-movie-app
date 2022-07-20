import { Container } from "./main-styles/styles";
import Card from "./components/card";
import Navbar from "./components/navbar";
import background from "./assets/photos/card1.jpg";

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
  return (
    <div>
      <Navbar />
      <Container className="grid grid-cols-12 gap-12">
        {array.map((item) => (
          <div className="col-span-4">
            <Card
              background={item.img}
              location={item.location}
              title={item.title}
            />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default App;
