import React,{useState} from "react";

const AddBookForm = ()=>{
    const [formData,setFormData] = useState({
        title:"",
        author:"",
        publishedYear:"",
        genre:"",
        language:"",
        country:"",
        rating:"",
        summary:"",
        awards:"",
        coverImageUrl:""
        })

        const handleChange =(e)=>{
            const{name,value} = e.target;

            setFormData((prevState)=> ({
                ...prevState,
                [name]:name === "publishdYear" || name === "rating" ? parseInt(value):value,
            }));
        }

        const handleSubmit = async(event)=>{
            event.preventDefault();
            try{
                const response = await fetch("https://backend-books-tau.vercel.app/books",
                {
                  method: "POST" ,
                  headers:{
                    "Content-Type": "application/json"
                  } ,
                  body: JSON.stringify(formData)
                }
                );

                if(!response.ok){
                    throw "Failed to add Book"
                }

                const data = await response.json();
                console.log("Added Book",data);

            }catch(error){
                console.log(error);
            }
        }

    return(
        <div>
            <h2>Add New Book</h2>
            <form onSubmit = {handleSubmit}>
                <label>Title:</label>
                <input 
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange} 
                />{" "}
                <br />
                <label>Author:</label>
                <input 
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                 />{" "}
                 <br />
                <label>PublishedYear:</label>
                <input 
                type="number"
                name="publishedYear"
                value={formData.publishedYear}
                onChange={handleChange}
                 />{" "}
                 <br />
                 <label>Genre:</label>
                <input 
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                 />{" "}
                 <br />
                 <label>Language:</label>
                <input 
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
                 />{" "}
                 <br />
                <label>Country:</label>
                <input 
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                 />{" "}
                 <br />
                <label>Rating:</label>
                <input 
                type="text"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                 />{" "}
                 <br />
                <label>Summary:</label>
                <input 
                type="text"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                 />{" "}
                <br />
                <label>CoverImageUrl:</label>
                <input 
                type="text"
                name="coverImageUrl"
                value={formData.coverImageUrl}
                onChange={handleChange}
                 />{" "}
                 <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )    
};

export default AddBookForm;