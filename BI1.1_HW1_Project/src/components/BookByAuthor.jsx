import useFetch from "../useFetch";
const BookByAuthor = ({author}) =>{

       const{data, loading, error} = 
    useFetch(`http://localhost:3000/books/directory/${author}`);

    console.log(data)

    return (
        <div>
          <h2>Books By {data[0].author}</h2>
            <ul>
            {data?.map(book=>(
                <li>{book.title}</li>
            ))}
            </ul>
        </div>
   
          )     
    
}


export default BookByAuthor;