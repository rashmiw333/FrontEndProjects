import "./App.css";
import Movies from "./components/Movies";
import MovieByTitle from "./components/MovieByTitle";

export default function App(){
  return(
    <main>
      <Movies/>
      <MovieByTitle title="Gully Boy"/>
    </main>
  )
}