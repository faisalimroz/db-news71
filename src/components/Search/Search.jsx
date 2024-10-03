import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex relative items-center justify-center">

            <input
                type="text"
                placeholder="Type your search"
                className="p-2 text-black rounded w-full max-w-xs focus:outline focus:ring focus:border-blue-300"
            />
            <button className='absolute right-2 text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </button>
        </div>
    );
};

export default SearchBar;

