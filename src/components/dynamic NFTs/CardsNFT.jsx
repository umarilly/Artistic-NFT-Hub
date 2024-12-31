import React, { useState, useEffect } from 'react';
import '../../styles/cardsnft.css';
import Forward from '../../assets/forward.png';
import Back from '../../assets/back.png';
import styled from 'styled-components';

import { Metaplex } from "@metaplex-foundation/js";
import { Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection(import.meta.env.VITE_SOLANA_NETWORK === "mainnet"
  ? "https://api.mainnet-beta.solana.com"
  : "https://api.devnet.solana.com"
);
const mx = Metaplex.make(connection);

const owner = import.meta.env.VITE_OWNER_PUBLIC_KEY;

const MainFirstSliderPos = styled.div`
  order: ${({ index, currentSlide, slides }) => (index - currentSlide + slides.length) % slides.length};
  transform: translateX(${({ index, currentSlide, slides }) => ((index - currentSlide) * 100) / slides.length}%);
  transition: transform 1s ease;
  @media (max-width: 768px) {
    transform: none;
    transition: none;
  }
`;

const CardsNFT = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNftsData = async () => {
      setIsLoading(true);
      await fetchNfts();
      setIsLoading(false);
    };

    fetchNftsData();
  }, []);

  const fetchNfts = async () => {
    try {
      const fetchedNfts = await mx.nfts().findAllByOwner({ owner: new PublicKey(owner) });
      console.log("Fetched NFTs : ", fetchedNfts);
      if (fetchedNfts.length === 0) {
        console.log("No NFTs found for this owner");
      } else {
        const nftsWithImages = await Promise.all(
          fetchedNfts.slice(0, 3).map(async (nft) => {
            const imageUrl = await fetchImages(nft.uri);
            return {
              ...nft,
              imageUrl,
              name: nft.name,
              mintAddress: nft.mintAddress.toString(),
              tokenAddress: nft.address.toString(),
            };
          })
        );
        setNfts(nftsWithImages);
      }
    } catch (err) {
      console.error("Error fetching NFTs:", err);
    }
  };

  async function fetchImages(uri) {
    try {
      const response = await fetch(uri);
      const data = await response.json();
      return data.image;
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  }

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === nfts.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? nfts.length - 1 : prevSlide - 1));
  };

  if (isLoading) {
    return <div>Loading NFTs...</div>;
  }

  if (nfts.length === 0) {
    return <div>No NFTs found for this owner.</div>;
  }

  return (
    <div className='main-units-area'>
      <div className='main-units-area-slider'>
        {nfts.map((nft, index) => (
          <MainFirstSliderPos key={index} index={index} currentSlide={currentSlide} slides={nfts} className={`main-first-slider-pos`}>
            <div className='main-first-slider-pos-head'>
              <div className='main-first-slider-pos-head-name'>{nft.name}</div>
              <div className='main-first-slider-pos-head-option'>...</div>
            </div>
            <div className='main-first-slider-pos-pic'>
              <img className='nft-img' src={nft.imageUrl} alt={nft.name} />
            </div>
            <div className='main-first-slider-pos-data'>
              <div className='main-first-slider-pos-data-row1'>
                <div>Owner</div>
                <div>{`${owner.slice(0, 5)}...${owner.slice(-3)}`}</div>
              </div>
              <div className='main-first-slider-pos-data-row2'>
                <div>Mint Address</div>
                <div>{`${nft.mintAddress.slice(0, 5)}...${nft.mintAddress.slice(-3)}`}</div>
              </div>
              <div className='main-first-slider-pos-data-row3'>
                <div>Token Address</div>
                <div>{`${nft.tokenAddress.slice(0, 5)}...${nft.tokenAddress.slice(-3)}`}</div>
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
  );
};

export default CardsNFT;

