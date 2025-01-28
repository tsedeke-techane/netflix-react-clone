import React from 'react';
import './Header.css';
import Netflixlogo from '../../assets/images/Netflixlogo.png';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__left">
                    <ul>
                        <li><img src= {Netflixlogo} alt='Netflix logo' width="100" /> </li>
                        <li>Netflix</li>
                        <li>Home</li>
                        <li>TVShows</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>MyList</li>
                        <li>Browse by Languages</li>
                    </ul>

                </div>
                <div className="header__right">
                    <ul>
                        <li><SearchTwoToneIcon /> </li>
                        <li><NotificationsNoneTwoToneIcon/> </li>
                        <li><PermIdentityTwoToneIcon/> </li>
                        <li><ArrowDropDownTwoToneIcon/> </li>
                      
                    </ul>
                </div>
            </div>
          
        </div>
    );
}

export default Header;
