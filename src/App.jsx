// import "./index.css";
import Movies from "./components/Movies";
import MovieByTitle from "./components/MovieByTitle";
import AddMovieForm from "./components/AddMovieForm";

export default function App(){
  return(
    <main className="app-container">
       <AddMovieForm/>
      <Movies/>
      <MovieByTitle title="Gully Boy"/>
    </main>
  )
}