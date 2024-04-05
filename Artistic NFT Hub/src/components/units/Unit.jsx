
import React from 'react';
import '../../styles/unit.css';
import CoolCatNFT from '../../assets/nft_illustration.png'
import Forward from '../../assets/forward.png'
import Back from '../../assets/back.png'

const Unit = () => {

    return (

        <>
            <div className='main-units-area' >

                {/* The slidding NTS */}

                <div className='main-units-area-slider' >

                    <div className='main-first-slider-pos' >
                        <div className='main-first-slider-pos-head'  >
                            <div className='main-first-slider-pos-head-name'  >
                                Cyberlinx #2551
                            </div>
                            <div className='main-first-slider-pos-head-option' >
                                ...
                            </div>
                        </div>
                        <div className='main-first-slider-pos-pic'  >
                            <img src={CoolCatNFT} alt="Cool Cat" />
                        </div>
                        <div className='main-first-slider-pos-data'  >
                            <div className='main-first-slider-pos-data-row1' >
                                <div>
                                    Owner
                                </div>
                                <div>
                                    72UGr...YdD
                                </div>
                            </div>
                            <div className='main-first-slider-pos-data-row2' >
                                <div>
                                    Mint Address
                                </div>
                                <div>
                                    72UGr...YdD
                                </div>
                            </div>
                            <div className='main-first-slider-pos-data-row3' >
                                <div>
                                    Token Address
                                </div>
                                <div>
                                    72UGr...YdD
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='main-first-slider-pos' >
                        <div className='main-first-slider-pos-head'  >
                            <div className='main-first-slider-pos-head-name'  >
                                The Eyedeas #1029
                            </div>
                            <div className='main-first-slider-pos-head-option' >
                                ...
                            </div>
                        </div>
                        <div className='main-first-slider-pos-pic'  >
                            <img src={CoolCatNFT} alt="Cool Cat" />
                        </div>
                        <div className='main-first-slider-pos-data'  >
                            <div className='main-first-slider-pos-data-row1' >
                                <div>
                                    Owner
                                </div>
                                <div>
                                    72UGr...YdD
                                </div>
                            </div>
                            <div className='main-first-slider-pos-data-row2' >
                                <div>
                                    Mint Address
                                </div>
                                <div>
                                    72UGr...YdD
                                </div>
                            </div>
                            <div className='main-first-slider-pos-data-row3' >
                                <div>
                                    Token Address
                                </div>
                                <div>
                                    72UGr...YdD
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='main-first-slider-pos' >
                        <div className='main-first-slider-pos-head'  >
                            <div className='main-first-slider-pos-head-name'  >
                                zombies #7919
                            </div>
                            <div className='main-first-slider-pos-head-option' >
                                ...
                            </div>
                        </div>
                        <div className='main-first-slider-pos-pic'  >
                            <img src={CoolCatNFT} alt="Cool Cat" />
                        </div>
                        <div className='main-first-slider-pos-data'  >
                            <div className='main-first-slider-pos-data-row1' >
                                <div>
                                    Owner
                                </div>
                                <div>
                                    72UGr...YdD
                                </div>
                            </div>
                            <div className='main-first-slider-pos-data-row2' >
                                <div>
                                    Mint Address
                                </div>
                                <div>
                                    72UGr...YdD
                                </div>
                            </div>
                            <div className='main-first-slider-pos-data-row3' >
                                <div>
                                    Token Address
                                </div>
                                <div>
                                    72UGr...YdD
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                {/* Buttons */}

                <div className='main-units-area-btn' >
                    <div className='main-units-area-btn-inside' >
                        <div className='main-units-area-btn-inside-back' >
                            <img src={Back} alt="Back" />

                        </div>
                        <div className='main-units-area-btn-inside-forward'  >
                            <img src={Forward} alt="Forward" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Unit
