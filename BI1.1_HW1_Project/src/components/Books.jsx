import useFetch from "../useFetch"

const Books =()=>{

    const{data, loading, error} = 
    useFetch("http://localhost:3000/books");

   // console.log(data);

    return(
        <div>
            <ul>
            {data?.map(book=>(
                <li>{book.title}</li>
            ))}
            </ul>
        </div>
    )
}



export default Books;