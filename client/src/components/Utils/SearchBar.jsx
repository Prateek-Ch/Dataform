import { useState, React } from 'react';
import classes from './SearchBar.module.css';

import SearchIcon from '@material-ui/icons/Search';

function SearchBar(props){
    const [searchTerm, setSearchTerm] = useState("");
    props.parentCallback(searchTerm);
      
    return(
    <>
        <div className={classes.search__container}>
            <input className={classes.search} type="text" name="Search" placeholder="Search Here" 
            onChange={(e)=>{
                setSearchTerm(e.target.value);
              }}/>
              <button class={classes.btn_search} type="submit">           
                  <SearchIcon />
              </button>
        </div>
    </>
    );
}

export default SearchBar;