import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {

    const {PRE_JUNIOR, JUNIOR, JUNIOR_PLUS} = PATH

    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to={PRE_JUNIOR}/>}/>
                <Route path={PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={JUNIOR} element={<Junior/>}/>
                <Route path={JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={"/*"} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
