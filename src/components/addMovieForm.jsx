import { useState } from 'react' ;


export const AddMovie = (props) =>{
    const [title, setTitle] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")
    const [imdbLink, setImbLink] = useState("")

    const clearAllFlied = () =>{
            setTitle('')
            setDescription('')
            setImageUrl('')
            setImbLink('')
    }
    const validaDate = () =>{
        if(!title) return false
        // TODO check if imdb link is a valid url
        return true
    }
    
    return (
        <div className="flex flex-col gap-3 items-center w-full my-4 ">
            <h1 className="text-4xl text-gray-500 font-semibold "> Add Movie </h1>
            <input className="p-2 border border-gray-500 rounded w-3/4" placeholder="Movie title" 
            value={title} 
            onChange={e => setTitle(e.target.value)}
            />

            <input className="p-2 border border-gray-500 rounded w-3/4" placeholder="Image URL" 
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}    
            />

            <textarea className="p-2 border border-gray-500 rounded w-3/4" rows={3} placeholder="Description" value={description}
            onChange={e => setDescription(e.target.value)}
            ></textarea>

            <input className="p-2 border border-gray-500 rounded w-3/4" placeholder="IMDB Link" 
            value={imdbLink}
            onChange={e => setImbLink(e.target.value)}
            />

            <button className="text-sm p-2   text-white bg-blue-600 hover:bg-blue-800 rounded" 
            onClick={() => {
                if(!validaDate()){
                    alert("werwrwerwer")
                    return;
                }
                props.setMovies((prev)=>[
                    {title, imageUrl, description, imdbLink}, 
                    ...prev
                    ]);
                clearAllFlied();
            }}>Add Movie</button>
        </div>
    )
}