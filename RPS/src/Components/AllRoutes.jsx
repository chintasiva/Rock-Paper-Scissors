import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FrontPage from './FrontPage'
import GamePage from './GamePage'
import Instructions from './Instructions'

const AllRoutes = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<FrontPage />} />
                <Route path='/instructions' element={<Instructions />} />
                <Route path='/game' element={<GamePage />} />
            </Routes>
        </>
    )
}

export default AllRoutes