import React, {useEffect, useRef, useState} from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import {MdClear} from 'react-icons/md';
import { useAppDispatch } from '../../hooks';
import { fetchGames } from '../../redux/asyncReducers/fetchGames';
import './search.scss';

const Search: React.FC = () => {

   const [value, setValue] = useState('');
   const [inputVisible, setInputVisible] = useState<boolean>(window.innerWidth >= 665);
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


   useEffect(() => {
    const handleResize = () => {
      setInputVisible(window.innerWidth >= 665)
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
   }, []);


   const toggleInputVisible = () => {
    setInputVisible(!inputVisible);
   }

  return (
   <div className="search">
      {inputVisible && <input
         ref={inputRef}
         type="text" 
         value={value} 
         onChange={e => filterGames(e.target.value)} 
      />}
      {value && inputVisible && <MdClear 
         className='search_clear'
         onClick={searchClear}
         size={22}
      />}
      <BiSearchAlt 
        onClick={toggleInputVisible}
        size={35} />
  </div>
  )
}

export default Search;