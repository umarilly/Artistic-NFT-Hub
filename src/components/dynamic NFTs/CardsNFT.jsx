import React, { useState, useEffect } from 'react';
import '../../styles/cardsnft.css';
import CoolCatNFT from '../../assets/nft_illustration.png';
import CreatureNFT from '../../assets/nft_illustration2.png';
import OneEyeNFT from '../../assets/nft_illustration3.png';
import Forward from '../../assets/forward.png';
import Back from '../../assets/back.png';
import styled from 'styled-components';

import { Metaplex } from "@metaplex-foundation/js";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
connection.getVersion().then((version) => {
    // console.log("Solana network version:", version);
});

const mx = Metaplex.make(connection);
// console.log("Metaplex object:", mx);

const owner = new PublicKey("84RSSrVEpb8VhSgt58j7mBwwQA38copF4tgRdpn9griy");

const CradsNFT = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [nfts, setNfts] = useState([]);
    const [slides, setSlides] = useState([
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
    ]);

    const fetchNfts = async () => {
        try {
            const fetchedNfts = await mx.nfts().findAllByOwner({ owner });
            console.log("Fetched NFTs : ", fetchedNfts);
            if (fetchedNfts.length === 0) {
                console.log("No NFTs found for this owner");
            } else {
                setNfts(fetchedNfts.slice(2, 5));

            }
        } catch (err) {
            console.error("Error fetching NFTs:", err);
        }
    };

    useEffect(() => {
        fetchNfts();
    }, []);

    async function fetchImages(uri) {
        try {
            const response = await fetch(uri);
            console.log('Images response : ' , response);
            const data = await response.json();
            console.log('Images response data : ' , data);
            const imageUrl = data.image;
            const name = data.name;
            return imageUrl;

        } catch (error) {
            console.error('Error fetching image:', error);
            return null;
        }
    }

    const DisplayImages = async () => {
        try {
            const updatedNfts = await Promise.all(
                nfts.map(async (nft) => {
                    const imageUrl = await fetchImages(nft.uri);
                    return { ...nft, imageUrl };
                })
            );

            const updatedSlides = updatedNfts.map(nft => ({
                name: nft.name,
                pic: nft.imageUrl,
                owner: '72UGr...YdD',
                mintAddress: nft.mintAddress
                    ? `${nft.mintAddress.toString().slice(0, 5)}...${nft.mintAddress.toString().slice(-3)}`
                    : '',
                tokenAddress: nft.address
                    ? `${nft.address.toString().slice(0, 5)}...${nft.address.toString().slice(-3)}`
                    : ''
            }));

            setNfts(updatedNfts);
            setSlides(updatedSlides);

        } catch (err) {
            console.error("Error fetching and displaying images : ", err);
        }
    };

    useEffect(() => {
        if (nfts.length > 0) {
            DisplayImages();
        }
    }, [nfts.length]);


    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const MainFirstSliderPos = styled.div`
    order: ${({ index, currentSlide, slides }) => (index - currentSlide + slides.length) % slides.length};
    transform: translateX(${({ index, currentSlide }) => (index - currentSlide) + slides.length}%);
    transition: transform 1s ease;
    @media (max-width: 768px) {
        transform: none;
        transition: none;
    }`;



    return (
        <>
            <div className='main-units-area'>
                <div className='main-units-area-slider'>
                    {slides.map((slide, index) => (
                        <MainFirstSliderPos as="div" key={index} index={index} currentSlide={currentSlide} slides={slides} className={`main-first-slider-pos`}>
                            <div className='main-first-slider-pos-head'>
                                <div className='main-first-slider-pos-head-name'>{slide.name}</div>
                                <div className='main-first-slider-pos-head-option'>...</div>
                            </div>
                            <div className='main-first-slider-pos-pic'>
                                <img className='nft-img'  src={slide.pic} alt={slide.name} />
                            </div>
                            <div className='main-first-slider-pos-data'>
                                <div className='main-first-slider-pos-data-row1'>
                                    <div>Owner</div>
                                    <div>{owner
                                        ? `${owner.toString().slice(0, 5)}...${owner.toString().slice(-3)}`
                                        : ''}</div>
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

export default CradsNFT;
