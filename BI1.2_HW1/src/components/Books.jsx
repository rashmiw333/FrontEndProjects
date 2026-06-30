import {useState} from "react";
import useFetch from "../useFetch"

const Books =()=>{
     const [successMessage,setSuccessMessage] = useState("");
    const{data, loading, error} = 
    useFetch("https://backend-books-tau.vercel.app/books");

    const handleDelete =async(bookId)=>{
        try{
        const response = await fetch(`http://localhost:3000/books/${bookId}`,
            {method: "DELETE"},
        );
        if(!response.ok){
            throw "Failed to delete a Book"
        }

        const data = await response.json();
            if(data){
            setSuccessMessage("Book deleted Suceessfully!");
                window.location.reload();
            }
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div className="books-container">
            {loading&& <p>Loading...</p>}
            {error&& <p>{error}</p>}
            <ul>
            {data?.map(book=>(
                <li key={book._id}>{book.title}{" "}
                <button onClick={()=>handleDelete(book._id)}>Delete</button></li>
            ))}
            </ul>
        </div>
    )
}



export default Books;
