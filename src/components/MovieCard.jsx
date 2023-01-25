export const MovieCard = (props) => {
  return (
    <div className="p-2 rounded shadow w-[300px] text-center flex flex-col item-center justify-center gap-4 ">
      <img className="w-full rounded" src={props.movie.imageUrl}  alt="no" />
        <div className="flex flex-col item-center justify-center gap-4">
            <h1 className="text-2xl font-bold text-gray-700">{props.movie.title}</h1>
            <p className="text-sm text-gray-500">{props.movie.description}</p>
            <a href={props.movie.imdbLink} className="text-blue-400 hover:text-blue-600 font-bold"> Read More</a>
        </div>
    </div>
    
  );
};

