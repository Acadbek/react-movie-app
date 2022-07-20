import { Container } from "./main-styles/styles";
import Card from "./components/card";
import Navbar from "./components/navbar";
import background from "./assets/photos/card1.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <Container className="grid grid-cols-12 gap-12">
        <div className="col-span-4">
          <Card
            background={background}
            location="gavayi orollari"
            title="dengiz bo'ylari va manzaralari"
          />
        </div>
        <div className="col-span-4">
          <Card
            background={background}
            location="gavayi orollari"
            title="dengiz bo'ylari va manzaralari"
          />
        </div>
        <div className="col-span-4">
          <Card
            background={background}
            location="gavayi orollari"
            title="dengiz bo'ylari va manzaralari"
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
