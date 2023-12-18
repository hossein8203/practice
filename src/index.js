import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Template} from "./Template/Template";
import "@fortawesome/fontawesome-free/css/all.css"
import {Calendar} from "./calendar/Calendar";
import {Auth} from "./Authentication/Auth";
import {LogIn} from "./Authentication/LogIn";
import {SignUp} from "./Authentication/SignUp";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ToastContainer/>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Template></Template>}/>
                <Route path={"/occasions"} element={<Template><Calendar/></Template>}/>
                <Route path={"/login"} element={<Auth><LogIn/></Auth>}/>
                <Route path={"/signup"} element={<Auth><SignUp/></Auth>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
