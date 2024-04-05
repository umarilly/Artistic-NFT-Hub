import React, { useState } from 'react';
import '../../styles/unit.css';
import CoolCatNFT from '../../assets/nft_illustration.png';
import CreatureNFT from '../../assets/nft_illustration2.png';
import OneEyeNFT from '../../assets/nft_illustration3.png';
import Forward from '../../assets/forward.png';
import Back from '../../assets/back.png';

const Unit = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            name: 'Cyberlinx #2551',
            pic: CoolCatNFT,
            owner: '72UGr...YdD',
            mintAddress: '72UGr...YdD',
            tokenAddress: '72UGr...YdD'
        },
        {
            name: 'The Eyedeas #1029',
            pic: CreatureNFT,
            owner: '72UGr...YdD',
            mintAddress: '72UGr...YdD',
            tokenAddress: '72UGr...YdD'
        },
        {
            name: 'zombies #7919',
            pic: OneEyeNFT,
            owner: '72UGr...YdD',
            mintAddress: '72UGr...YdD',
            tokenAddress: '72UGr...YdD'
        }
    ];

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    return (
        <>
            <div className='main-units-area'>
                <div className='main-units-area-slider'>

                    {slides.map((slide, index) => (

                        <div key={index} className={`main-first-slider-pos`} style={{ order: (index - currentSlide + slides.length) % slides.length, transform: `translateX(${(index - currentSlide) + slides.length}%)`,
                        transition: 'transform 1s ease' }} >
                            <div className='main-first-slider-pos-head'>
                                <div className='main-first-slider-pos-head-name'>{slide.name}</div>
                                <div className='main-first-slider-pos-head-option'>...</div>
                            </div>
                            <div className='main-first-slider-pos-pic'>
                                <img src={slide.pic} alt={slide.name} />
                            </div>
                            <div className='main-first-slider-pos-data'>
                                <div className='main-first-slider-pos-data-row1'>
                                    <div>Owner</div>
                                    <div>{slide.owner}</div>
                                </div>
                                <div className='main-first-slider-pos-data-row2'>
                                    <div>Mint Address</div>
                                    <div>{slide.mintAddress}</div>
                                </div>
                                <div className='main-first-slider-pos-data-row3'>
                                    <div>Token Address</div>
                                    <div>{slide.tokenAddress}</div>
                                </div>
                            </div>
                        </div>
                    ))}

                    
                </div>
                <div className='main-units-area-btn'>
                    <div className='main-units-area-btn-inside'>
                        <div className='main-units-area-btn-inside-back' onClick={handlePrevSlide}>
                            <img src={Back} alt='Back' />
                        </div>
                        <div className='main-units-area-btn-inside-forward' onClick={handleNextSlide}>
                            <img src={Forward} alt='Forward' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Unit;

/*

style={{
    transform: `translateX(${(index - currentSlide) * 33.33}%)`,
    transition: 'transform 0.5s ease'
}}



import React from 'react';
import '../../styles/unit.css';
import CoolCatNFT from '../../assets/nft_illustration.png'
import CreatureNFT from '../../assets/nft_illustration2.png'
import OneEyeNFT from '../../assets/nft_illustration3.png'
import Forward from '../../assets/forward.png'
import Back from '../../assets/back.png'

const Unit = () => {

    return (

        <>
            <div className='main-units-area' >


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


                    <div className='main-second-slider-pos' >
                        <div className='main-second-slider-pos-head'  >
                            <div className='main-second-slider-pos-head-name'  >
                                The Eyedeas #1029
                            </div>
                            <div className='main-second-slider-pos-head-option' >
                                ...
                            </div>
                        </div>
                        <div className='main-second-slider-pos-pic'  >
                            <img src={CreatureNFT} alt="Creature" />
                        </div>
                        <div className='main-second-slider-pos-data'  >
                            <div className='main-second-slider-pos-data-row1' >
                                <div>
                                    Owner
                                </div>
                                <div>
                                    72UGr...YdD
                                </div>
                            </div>
                            <div className='main-second-slider-pos-data-row2' >
                                <div>
                                    Mint Address
                                </div>
                                <div>
                                    72UGr...YdD
                                </div>
                            </div>
                            <div className='main-second-slider-pos-data-row3' >
                                <div>
                                    Token Address
                                </div>
                                <div>
                                    72UGr...YdD
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='main-third-slider-pos' >
                        <div className='main-third-slider-pos-head'  >
                            <div className='main-third-slider-pos-head-name'  >
                                zombies #7919
                            </div>
                            <div className='main-third-slider-pos-head-option' >
                                ...
                            </div>
                        </div>
                        <div className='main-third-slider-pos-pic'  >
                            <img src={OneEyeNFT} alt="One Eye" />
                        </div>
                        <div className='main-third-slider-pos-data'  >
                            <div className='main-third-slider-pos-data-row1' >
                                <div>
                                    Owner
                                </div>
                                <div>
                                    72UGr...YdD
                                </div>
                            </div>
                            <div className='main-third-slider-pos-data-row2' >
                                <div>
                                    Mint Address
                                </div>
                                <div>
                                    72UGr...YdD
                                </div>
                            </div>
                            <div className='main-third-slider-pos-data-row3' >
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

*/
