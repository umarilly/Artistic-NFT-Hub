
import React, { useState } from 'react';
import '../../styles/unit.css';
import CoolCatNFT from '../../assets/nft_illustration.png';
import CreatureNFT from '../../assets/nft_illustration2.png';
import OneEyeNFT from '../../assets/nft_illustration3.png';
import Forward from '../../assets/forward.png';
import Back from '../../assets/back.png';
import styled from 'styled-components';

const Unit = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const MainFirstSliderPos = styled.div`
    order: ${({ index, currentSlide, slides }) => (index - currentSlide + slides.length) % slides.length};
    transform: translateX(${({ index, currentSlide }) => (index - currentSlide) + slides.length}%);
    transition: transform 1s ease;
    @media (max-width: 768px) {
        transform: none;
        transition: none;
    }`;

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

                        <MainFirstSliderPos key={index} index={index} currentSlide={currentSlide} slides={slides} className={`main-first-slider-pos`}>
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
                            
                        </MainFirstSliderPos>


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