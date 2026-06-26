import useFetch from "../useFetch"

const Books =()=>{

    const{data, loading, error} = 
    useFetch("https://backend-books-tau.vercel.app/books");

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
