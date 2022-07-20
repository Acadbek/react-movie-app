import { Route, Routes } from "react-router-dom";
import Contact from "../Pages/Contact/Contact";
import Discount from "../Pages/Discount/Discount";
import InnerTurizm from "../Pages/InnerTurizm/InnerTurizm";
import OuterTurizm from "../Pages/OuterTurizm/OuterTurizm";
import Home from "../Home/Home";

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/innerTurizm" element={<InnerTurizm />} />
      <Route path="/outerTurizm" element={<OuterTurizm />} />
      <Route path="/discount" element={<Discount />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
export default Routess;
