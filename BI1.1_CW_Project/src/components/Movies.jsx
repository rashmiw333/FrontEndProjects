import useFetch from "../useFetch"

const Movies =()=>{

    const{data, loading, error} = 
    useFetch("https://backend-movies-kappa.vercel.app/movies");

    // console.log(data);

    return(
        <div>
            <ul>
            {data?.map(movie=>(
                <li>{movie.title}</li>
            ))}
            </ul>
        </div>
    )
}

export default Movies;
