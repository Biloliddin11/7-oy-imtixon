'use client'
import { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import axios from 'axios';




const Search = () => {
	const [search, setSearch] = useState('');
	const [data, setData] = useState(null);
	const api = axios.create({
		baseURL: "https://dummyjson.com",
	});
	
  
	useEffect(() => {
	  if (search) {
		api
		  .get(`/products/search?q=${search}`, {
			params: { limit: 10 },
		  })
		  .then((res) => {
			setData(res.data);
			console.log(res.data);
		  });
	  }
	}, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    router.push(`?search=${encodeURIComponent(query)}`, {
      scroll: false,
    });
  };



	return (
		<div className="relative flex items-center">
		<form action="" className="bg-transparent p-4 rounded-lg flex items-center space-x-0">
		  <input
			type="text"
			placeholder="Search"
			className="w-full p-2 bg-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-500 ease-in-out"
			onChange={(e) => setSearch(e.target.value)}
			onBlur={() => setSearch('')}
		  />
		  <button type="button" className="p-2 bg-teal-500 text-white rounded-r-lg hover:bg-teal-600 transition duration-500 ease-in-out">
			<IoSearch size={24} />
		  </button>
		</form>
		{data && data.products.length > 0 && search && data.total > 0 && (
		  <div className="overflow-auto max-h-[400px] absolute top-12 left-0 right-0 z-10 mt-2 bg-gray-800 p-4 rounded-lg shadow-xl animate-fadeIn space-y-4">
			{data.products.map((item) => (
			  <div
				key={item.id}
				className="flex items-center space-x-4 p-3 bg-gray-900 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
			  >
				<img
				  src={item.thumbnail}
				  alt={item.title}
				  className="w-16 h-16 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
				/>
				<p className="text-white text-base font-medium">{item.title}</p>
			  </div>
			))}
		  </div>
		)}
		
	  </div>
	)
}

export default Search