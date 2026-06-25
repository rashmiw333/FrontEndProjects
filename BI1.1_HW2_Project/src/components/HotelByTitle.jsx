import useFetch from "../useFetch";
const HotelByTitle = ({name}) =>{

       const{data, loading, error} = 
    useFetch(`http://localhost:3000/hotels/${name}`);

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

