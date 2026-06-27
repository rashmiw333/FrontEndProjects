import useFetch from "../useFetch"

const Movies =()=>{

    const{data, loading, error} = 
    useFetch("http://localhost:3000/movies");

    // console.log(data);

    return(
        <div className="movies-container">
            {loading&& <p>Loading...</p>}
            {error&& <P>{error}</P>}
            <ul>
            {data?.map(movie=>(
                <li key={movie._id}>{movie.title}</li>
            ))}
            </ul>
        </div>
    )
}

export default Movies;