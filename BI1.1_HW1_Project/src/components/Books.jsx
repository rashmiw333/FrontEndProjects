import useFetch from "../useFetch"

const Books =()=>{

    const{data, loading, error} = 
    useFetch("backend-books-tau.vercel.app/books");

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
