import useFetch from "../useFetch";
const HotelByTitle = ({name}) =>{

       const{data, loading, error} = 
    useFetch(`https://front-end-hotels-git-bi11hw2-rashmiw333s-projects.vercel.app/hotels/${name}`);

    console.log(data)

    return data ? (
        <div>
          <h2>{data.name}</h2>
            <p>Location: {data.location}</p>
            <p>Rating: {data.rating}</p>
            <p>Price Range: {data.priceRange}</p>
        </div>): 
            (loading && <p>Loading</p>
            )
        
    
}


export default HotelByTitle;

