import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import React from 'react'

function AboutIconLink() {
  return (
    <div className='about-link'>
      {/* <Link to="/about"> */}
      <Link to={
        {pathname: '/about',
        search : 'sort=name',
        hash:'#hello'
      
        }
        }>
        <FaQuestion size={30} />
      </Link>
    </div>

// a href are not used - Link are used because a href does 
// refreashes the pages any internal page should not be refreashed 

    )
}

export default AboutIconLink