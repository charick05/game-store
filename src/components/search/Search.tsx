import React, {useEffect, useRef, useState} from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import {MdClear} from 'react-icons/md';
import { useAppDispatch } from '../../hooks';
import { fetchGames } from '../../redux/asyncReducers/fetchGames';
import './search.scss';

const Search: React.FC = () => {

   const [value, setValue] = useState('');
   const [searchTimer, setSearchTimer] = useState<NodeJS.Timeout | null>(null);
   const inputRef = useRef<HTMLInputElement>(null);
   const dispatch = useAppDispatch();

   const filterGames = (e: string) => {
     setValue(e);

     if(searchTimer) {
       clearTimeout(searchTimer);
     }

     setSearchTimer(
       setTimeout(() => {
         dispatch(fetchGames(e));
       }, 1000)
     )
   };


   useEffect(() => {
     return () => {
       if (searchTimer) {
         clearTimeout(searchTimer);
       }
     };
   }, [searchTimer]);


   const searchClear = () => {
      setValue("");
      dispatch(fetchGames(""))
      inputRef.current?.focus();
   }

  return (
   <div className="search">
      <input
         ref={inputRef}
         type="text" 
         value={value} 
         onChange={e => filterGames(e.target.value)} 
      />
      {value && <MdClear 
         className='search_clear'
         onClick={searchClear}
         size={22}
      />}
      {!value && <BiSearchAlt 
        className='search_icon'
      />}
  </div>
  )
}

export default Search;