import "./App.css";
import Books from "./components/Books";
import BookByTitle from "./components/BookByTitle";
import BookByAuthor from "./components/BookByAuthor";
import AddBookForm from "./components/AddBookForm";

export default function App(){
  return(
    <main className="app-container">
    <AddBookForm/>
    <Books/>
    <BookByTitle title="The Great Gatsby"/>
    <BookByAuthor author="Harper Lee"/>
    </main>
  )
}