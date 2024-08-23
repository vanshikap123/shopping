import React, { useState } from 'react'
import SearchContext from './SearchContext'
const SearchState = (props) => {
    const [search,setsearch]=useState("")
    const [categoryClicked, setcategoryClicked] = useState(false);
    console.log(categoryClicked)
    console.log(search)
  return (
    <div>
      <SearchContext.Provider value={{search,setsearch,categoryClicked,setcategoryClicked}}>
{props.children}
      </SearchContext.Provider>
    </div>
  )
}

export default SearchState;