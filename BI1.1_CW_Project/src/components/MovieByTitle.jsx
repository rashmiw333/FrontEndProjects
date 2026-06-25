import useFetch from "../useFetch";
const MovieByTitle = ({title}) =>{

       const{data, loading, error} = 
    useFetch(`https://backend-hotels1-git-bi11cw-rashmiw333s-projects.vercel.app/movies/${title}`);

    console.log(data)

    return data ? (
        <div>
          <h2>{data.title}</h2>
            <p>Director: {data.director}</p>
            <p>Country: {data.country}</p>
            <p>ReleaseYear: {data.releaseYear}</p>
            <p>Rating: {data.rating}</p>
             <p>Actors: {data.actors.join(", ")}</p>
             <p>Awards: {data.awards}</p>
             <p>Plot: {data.plot}</p>
             <img src={data.posterUrl} alt="Poster Image" />
        </div>): 
            (loading && <p>Loading</p>
            )
        
    
}

export default MovieByTitle;