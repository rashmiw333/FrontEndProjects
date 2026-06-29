import useFetch from "../useFetch";
const BookByAuthor = ({author}) =>{

       const{data, loading, error} = 
    useFetch(`http://localhost:3000/books/directory/${author}`);

   // console.log(data)

    return (
        <div className="books-container">
          <h2>Books By {data?.[0]?.title}</h2>
            <ul>
            {data?.map(book=>(
                <li key={book._id}>{book.title}</li>
            ))}
            </ul>
        </div>
   
          )     
    
}


export default BookByAuthor;
