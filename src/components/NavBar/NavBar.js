import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import classes from './NavBar.module.css'
import FilterList from '../FilterList/FilterList'
import DUMMY_DATA from '../../util/dummyData'
const NavBar = () => {
  return (
    <nav className={classes.navDiv}>
      <FilterList />
      <SearchBar data={DUMMY_DATA} />
    </nav>
  )
}

export default NavBar
