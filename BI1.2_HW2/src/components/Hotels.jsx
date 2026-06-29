import useFetch from "../useFetch"

const Hotels =()=>{

    const{data, loading, error} = 
    useFetch("https://backend-hotels-psi.vercel.app/hotels");


    return(
        <div className="hotels-container">
            {loading&& <p>Loading...</p>}
            {error&& <P>{error}</P>}
            <h2>All Hotels</h2>
            <ul>
            {data?.map(hotel=>(
                <li key={hotel._id}>{hotel.name}</li>
            ))}
            </ul>
        </div>
    )
}




export default Hotels;