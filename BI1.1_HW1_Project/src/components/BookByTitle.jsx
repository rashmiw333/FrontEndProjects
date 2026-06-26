import useFetch from "../useFetch";
const BookByTitle = ({title}) =>{

       const{data, loading, error} = 
    useFetch(`backend-books-tau.vercel.app/books/${title}`);

    //console.log(data)

    return data ? (
        <div>
          <h2>{data.title}</h2>
            <p>Author: {data.author}</p>
            <p>ReleaseYear: {data.publishedYear}</p>
            <p>Genre: {data.genre}</p>
        </div>): 
            (loading && <p>Loading</p>
            )
        
    
}


export default BookByTitle;
