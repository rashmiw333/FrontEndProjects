import useFetch from "../useFetch";
const BookByTitle = ({title}) =>{

       const{data, loading, error} = 
    useFetch(`http://localhost:3000/books/${title}`);

    //console.log(data)

    return data ? (
        <div className="books-container">
          <h2>{data.title}</h2>
            <p>Author: {data.author}</p>
            <p>ReleaseYear: {data.publishedYear}</p>
            <p>Genre: {data.genre}</p>
        </div>): 
            (loading && <p>Loading</p>
            )
        
    
}


export default BookByTitle;
