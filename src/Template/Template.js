import {NavBar} from "./NavBar.jsx;";
import {SideBar} from "./SideBar";

export const Template = props => {


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