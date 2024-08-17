import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Main from '../main/Main'
import '../../styles/home.css'

const Home = () => {

    return (
        <>
            <div className='home-root' >
                <div className='home-sidebar' >
                    <Sidebar />
                </div>
                <div className='home-main' >
                    <Main />
                </div>
            </div>
        </>
    )
}

export default Home
