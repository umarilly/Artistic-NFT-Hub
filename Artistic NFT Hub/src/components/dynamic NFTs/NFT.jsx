
import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Main from '../main/Main'
import '../../styles/nft.css'
import CardsNFT from './CardsNFT'

import Unit from '../units/Unit'

import Eicon from '../../assets/Eicon.png'

import Refresh from '../../assets/refresh.png'
import Avatar from '../../assets/avatar.png'

const NFT = () => {
    return (
        <>
            <div className='home-root' >

                <div className='home-sidebar' >
                    < Sidebar />
                </div>

                <div className='home-main' >
                    <div className='main' >

                        <div className='main-first-div' >

                            <div className='main-first-div-1' >

                                <div className='main-first-div-1-left' >
                                    <div className='main-first-div-1-logo' >
                                        <img src={Eicon} alt="ETH" />
                                    </div>
                                    <div className='main-first-div-1-eth' >
                                        ETH/USDT
                                    </div>
                                    <div className='main-first-div-1-money' >
                                        1137.62 + 2.62%↑
                                    </div>
                                </div>

                                <div className='main-first-div-1-right' >
                                    <div className='main-first-div-1-logo' >
                                        <img src={Avatar} alt="Avatar" />
                                    </div>
                                    <div className='main-first-div-1-eth' >
                                        Zash
                                    </div>
                                    <div className='main-first-div-1-hr' >
                                        |
                                    </div>
                                    <div className='main-first-div-1-id' >
                                        User ID: 11026666
                                    </div>
                                </div>
                            </div>

                            <div className='main-first-div-2' >
                                <div>
                                    <div style={{ fontSize: 'xx-large', marginLeft: '10px' }} > Dashboard </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                    <img src={Refresh} alt="Refresh" />
                                </div>
                            </div>

                        </div>

                        <div className='main-second-div' >
                            <div className='main-second-div-1' >
                                < CardsNFT />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default NFT
