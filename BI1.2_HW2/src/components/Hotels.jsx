import {useState} from "react";
import useFetch from "../useFetch"

const Hotels =()=>{
     const [successMessage,setSuccessMessage] = useState("");
    const{data, loading, error} = 
    useFetch("https://backend-hotels-psi.vercel.app/hotels");

        const handleDelete =async(hotelId)=>{
        try{
        const response = await fetch(`https://backend-hotels-psi.vercel.app/hotels/${hotelId}`,
            {method: "DELETE"},
        );
        if(!response.ok){
            throw "Failed to delete a Hotel"
        }

        const data = await response.json();
            if(data){
            setSuccessMessage("Hotel deleted Suceessfully!");
            }
        }catch(error){
            console.log(error)
        }
    }


    return(
        <div className="hotels-container">
            {loading&& <p>Loading...</p>}
            {error&& <P>{error}</P>}
            <h2>All Hotels</h2>
            <ul>
            {data?.map(hotel=>(
                <li key={hotel._id}>{hotel.name}{" "}
                <button onClick={()=>handleDelete(hotel._id)}>Delete</button></li>
            ))}
            </ul>
        </div>
    )
}




export default Hotels;
