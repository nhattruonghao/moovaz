import React, { useContext } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { GlobalState } from '../GlobalState';
import Home from '../Page/Home';
import LoginPage from '../Page/LoginPage';
import NotFound from '../Page/NotFound';

function MyRoutes() {
    const state = useContext(GlobalState);
    const [isLogged] = state.ReloDetail.isLogged;
    console.log(isLogged);
    return (
        <Routes>
            <Route path='/login' element={isLogged ? <Navigate to='/' /> : <LoginPage />} />
            <Route path='/' element={isLogged ? <Home /> : <Navigate to='/login' /> } />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}

export default MyRoutes
