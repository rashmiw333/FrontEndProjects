import { useState } from "react";
import useFetch from "../useFetch"

const Movies =()=>{
    const [successMessage,setSuccessMessage] = useState("");
    const{data, loading, error} = 
    useFetch("http://localhost:3000/movies");

    const handleDelete =async(movieId)=>{
        try{
        const response = await fetch(`http://localhost:3000/movies/${movieId}`,
            {method: "DELETE"},
        );
        if(!response.ok){
            throw "Fai;ed to delete a Movie"
        }

        const data = await response.json();
            if(data){
            setSuccessMessage("Movie deleted Suceessfully!");
                window.location.reload();
            }
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div className="movies-container">
            {loading&& <p>Loading...</p>}
            {error&& <P>{error}</P>}
            <ul>
            {data?.map(movie=>(
                <li key={movie._id}>{movie.title}{" "}
                <button onClick={()=>handleDelete(movie._id)}>Delete</button>
                </li>
            ))}
            </ul>
            <p>{successMessage}</p>
        </div>
    )
}

export default Movies;