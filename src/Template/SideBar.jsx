import {Link} from "react-router-dom";
import {getName} from "../JwtService";

export const SideBar=props=>{


    return(
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="/login" className="brand-link">
                    <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo"
                         className="brand-image img-circle elevation-3"
                         style={{opacity:0.8}}/>
                    <span className="brand-text font-weight-light">پنل مدیریت</span>
                </Link>

                <div className="sidebar">
                    <div>
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img
                                    src="../../dist/img/AdminLTELogo.png"
                                    className="img-circle elevation-2" alt="User Image"/>
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">{getName()}</a>
                            </div>
                        </div>

                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                                data-accordion="false">
                                <li className="nav-item">
                                    <Link to="/occasions" className="nav-link">
                                        <i className="nav-icon fa fa-calendar"></i>
                                        <p>
                                            مناسبت ها
                                        </p>
                                    </Link>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>
        </>
    )
}