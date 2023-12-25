import {NavBar} from "./NavBar";
import {SideBar} from "./SideBar";
import {useEffect, useState} from "react";
import {isValid} from "../JwtService";
import {useLocation, useNavigate} from "react-router-dom";

export const Template = props => {

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (isValid() !== true){
            const url = location.pathname
            navigate(`/login?url=${url}`)
        }

    }, []);


    return (
        <>
            <div className="wrapper">

                <NavBar/>

                <SideBar/>

                <div className="content-wrapper">

                    {
                        props.children
                    }

                </div>

                <aside className="control-sidebar control-sidebar-dark">
                </aside>
            </div>

        </>
    )
}