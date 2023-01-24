export const AddMovieForm = () =>{
    return (
        <div className="flex flex-col gap-3 items-center w-full my-4 ">
            <h1 className="text-4xl text-gray-500 font-semibold "> Add Movie </h1>
            <input className="p-2 border border-gray-500 rounded w-3/4" placeholder="Movie title"/>
            <input className="p-2 border border-gray-500 rounded w-3/4" placeholder="Image URL"/>
            <textarea className="p-2 border border-gray-500 rounded w-3/4" rows={3} placeholder="Description"></textarea>
            <input className="p-2 border border-gray-500 rounded w-3/4" placeholder="IMDB Link"/>
            <button className="text-sm p-2   text-white bg-blue-600 hover:bg-blue-800 rounded">Add Movie</button>
        </div>
    )
}