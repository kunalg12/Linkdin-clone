import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import linkdin_logo from './img/linkedin.svg'
// import Profile_pic from './img/ProfilePictureMaker.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {

  // eslint-disable-next-line no-unused-vars
  const user = useSelector(selectUser); 
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header'>
        <div className="header__left">
          <img src={linkdin_logo} alt="" />

            <div className="header__search">
                <SearchIcon/> 
                <input placeholder='Search' type="text" />
            </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption avatar={true} title='Me' onClick={logoutOfApp}/>    
        </div>
    </div>
  )
}

export default Header