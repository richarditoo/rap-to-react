import React, { useEffect, useState } from "react";

import "./style.css";

export const Component = () => {

	const [msg, setMsg] = useState('');
	
	  useEffect(() => {
		fetch('http://localhost:8080/api/greeting')
		  .then(res => res.json())
		  .then(data => setMsg(data.message));
	  }, []);

  return (
<div id="webcrumbs"> 
        	<div className="relative w-full h-screen bg-gray-300 flex items-center justify-center">
	  <div className="absolute w-full max-w-md lg:min-w-[480px] overflow-hidden rounded shadow-lg bg-white">
	    <div className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white">
	      <h3 className="font-medium">RAP com Spring Boot</h3>
	      <div className="flex space-x-2">
	        <button className="hover:bg-blue-700 rounded-full p-1 transition-colors duration-200">
	          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
	            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-5a1 1 0 112 0v2a1 1 0 11-2 0v-2zm1-5a1 1 0 110 2 1 1 0 010-2z" clipRule="evenodd" />
	          </svg>
	        </button>
	        <button className="hover:bg-blue-700 rounded-full p-1 transition-colors duration-200">
	          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
	            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
	          </svg>
	        </button>
	        <button className="hover:bg-blue-700 rounded-full p-1 transition-colors duration-200">
	          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
	            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
	          </svg>
	        </button>
	      </div>
	    </div>
	    <div className="p-4">
	      <p className="text-gray-800">{msg}</p>
	      {/* Next: "Add a footer with copyright information" */}
	    </div>
	  </div>
	  {/* Next: "Add a floating action button in the bottom right corner" */}
	</div> 
        </div>
  )
}

