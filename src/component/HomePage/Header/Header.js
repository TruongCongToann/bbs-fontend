import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { path } from '../../../route/routes';
const Header = () => {

    const navigate = useNavigate();


    const handleHome = () =>{
        navigate(path.DETAIL)
    }

  return (
    <div className='header-container'>
        <div className='header-title' onClick={()=>handleHome()}>
                Home
        </div>
    </div>
  )
}

export default Header