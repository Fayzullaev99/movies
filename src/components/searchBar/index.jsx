import React, { useState } from 'react'
import { toast } from 'react-toastify';
import classes from './search.module.scss'
function SearchBar({getUrl}) {
  const [search, setValue] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    if (search.trim() === '') {
      toast.warn('enter correct value please!!!')
    } else {
      getUrl(`/search/movie?&query=${search}`)
    }
  }
  return (
    <div className={classes['search']}>
      <form onSubmit={onSubmit} className={classes["search__form"]}>
        <input 
          type="text" 
          value={search} 
          onChange={(e) => setValue(e.target.value)} 
          className={classes['search__input']} 
          placeholder="Найти фильм, сериал..." 
        />
      </form>
    </div>
  )
}

export default SearchBar