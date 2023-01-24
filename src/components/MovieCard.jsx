export const MovieCard = () => {
  return (
    <div className="p-2 rounded shadow w-[300px] text-center flex flex-col item-center justify-center gap-4 ">
      <img className="w-full rounded" src='https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'  alt="no" />
        <div className="flex flex-col item-center justify-center gap-4">
            <h1 className="text-2xl font-bold text-gray-700">Avatar 2</h1>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, tenetur delectus, molestiae illum ex reprehenderit quis distinctio non magnam pariatur ab ipsam a quasi rem, sapiente praesentium. Maiores, aspernatur delectus.</p>
            <a href=" " className="text-blue-400 hover:text-blue-600 font-bold"> Read More</a>
        </div>
    </div>
  );
};
