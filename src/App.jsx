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
      <Container className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        {array.map((item) => (
          <div>
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
