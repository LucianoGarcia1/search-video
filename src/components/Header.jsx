import React, { useContext } from 'react'
import { Property } from '../property'

export const Header = () => {

  const value = useContext(Property);

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <header className="c-header">
        <form onSubmit={handleSubmit} method="get">
            <input type="search" 
            placeholder="Search..."
            className="c-header__search"
            title="search"
            value={value.input}
            onChange={({target})=> value.setInput(target.value)}
            />
        </form>
    </header>
  )
}