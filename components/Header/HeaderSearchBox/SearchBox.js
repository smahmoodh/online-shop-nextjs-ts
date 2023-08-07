'use client'
import {useState} from 'react';

import './SearchBox.css';

const SearchBox = () => {
    const [searchText, setSearchText] = useState('');
    const searchHandle = (e) => {
        e.preventDefault();
    }
    return (
        <div className='relative w-full'>
            <form method='get' action='/'>
                <label className="bg-gray-100 relative block">
                    <span className="sr-only">Search</span>
                    <button
                        onClick={searchHandle}
                        className="absolute inset-y-0 left-0 flex items-center px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor"
                             className="h-5 w-5 text-gray-300" viewBox="0 0 20 20">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                        </svg>
                    </button>
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        className="placeholder:text-gray-300 block bg-transparent w-full rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="دنبال چه لوازمی هستید؟" type="text" name="search"/>
                </label>
            </form>
        </div>
    )
}

export default SearchBox


