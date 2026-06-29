import "./App.css";
import Hotels from "./components/Hotels";
import HotelByTitle from "./components/HotelByTitle";
import AddHotelForm from "./components/AddHotelForm";

export default function App(){
  return(
    <main className="app-container">
      <AddHotelForm/>
      <Hotels/>
    <HotelByTitle name="Summer Resort"/>
    </main>
  )
}