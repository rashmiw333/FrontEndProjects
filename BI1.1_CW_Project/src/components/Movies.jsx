import useFetch from "../useFetch"

const Movies =()=>{

    const{data, loading, error} = 
    useFetch("https://backend-hotels1-git-bi11cw-rashmiw333s-projects.vercel.app/movies");

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