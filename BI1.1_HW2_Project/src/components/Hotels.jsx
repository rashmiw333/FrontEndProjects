import useFetch from "../useFetch"

const Hotels =()=>{

    const{data, loading, error} = 
    useFetch("https://front-end-hotels-git-bi11hw2-rashmiw333s-projects.vercel.app/hotels");


    return(
        <div>
            <h2>All Hotels</h2>
            <ul>
            {data?.map(hotel=>(
                <li>{hotel.name}</li>
            ))}
            </ul>
        </div>
    )
}



export default Hotels;

