import React from 'react'
import '../../styles/sidebar.css'
import BrandLogo from '../../assets/brandlogo.png'
import Notifications from '../../assets/Notifications.png'

import Home from '../../assets/home.png'
import NFTListing from '../../assets/nftlisting.png'
import Settings from '../../assets/settings.png'

import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const OpenHome = () => {
        navigate('/');
    }

    const OpenNfts = () => {
        navigate('/nft');
    }

    return (
        <>
            <div className='sidebar'>
                <div className='vertical-sidebar'>
                    <div className='sidebar-logo'>
                        <div className='sidebar-logo-image'>
                            <img src={BrandLogo} alt="Atristic NFT Hub" />
                        </div>
                    </div>

                    <div className='sidebar-main-menu'>
                        <div onClick={OpenHome} className={location.pathname === '/nft' ? 'animated-div' : ''}>
                            <img src={Home} alt="Home" />
                        </div>
                        <div onClick={OpenNfts} className={location.pathname === '/' ? 'animated-div' : ''}>
                            <img src={NFTListing} alt="NFT Listing" />
                        </div>
                        <div>
                            <img src={Settings} alt="Settings" />
                        </div>
                    </div>

                    <div className='sidebar-setting-menu'>
                        <img src={Notifications} alt="Notifications" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Sidebar;
