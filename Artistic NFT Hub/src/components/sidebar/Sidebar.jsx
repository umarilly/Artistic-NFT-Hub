
import React from 'react'
import '../../styles/sidebar.css'
import BrandLogo from '../../assets/brandlogo.png'
import Notifications from '../../assets/Notifications.png'

import Home from '../../assets/home.png'
import NFTListing from '../../assets/nftlisting.png'
import Settings from '../../assets/settings.png'

const Sidebar = () => {

    return (

        <>
            <div className='sidebar' >

                <div className='sidebar-main-menu' >

                    <div className='sidebar-main-menu-1' >
                        <div className='sidebar-main-menu-brandlogo' >
                            <img src={BrandLogo} alt="Atristic NFT Hub" />
                        </div>
                    </div>

                    <div className='sidebar-main-menu-2' >
                        <div ><img src={Home} alt="Home" /> </div>
                        <div> <img src={NFTListing} alt="NFT Listing" /> </div>
                        <div> <img src={Settings} alt="Settings" /> </div>
                    </div>



                    <div className='sidebar-main-menu-3' >
                        <img src={Notifications} alt="Notifications" />
                    </div>

                </div>

            </div >
        </>
    )
};

export default Sidebar;
