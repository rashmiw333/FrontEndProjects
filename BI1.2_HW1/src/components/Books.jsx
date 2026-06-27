import useFetch from "../useFetch"

const Books =()=>{

    const{data, loading, error} = 
    useFetch("https://backend-books-tau.vercel.app/books");

   // console.log(data);

    return(
        <div className="books-container">
            {loading&& <p>Loading...</p>}
            {error&& <P>{error}</P>}
            <ul>
            {data?.map(book=>(
                <li key={book._id}>{book.title}</li>
            ))}
            </ul>
        </div>
    )
}



export default Books;
