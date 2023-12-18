import "./registerPage.css"
import {Link} from "react-router-dom";


export const Auth=(props)=>{



    return(
        <>
            <section className="bgImage" data-background="images/register-bg.avif" id="register">
                <div className="container py-2">
                    <div id="register-switch">
                        <Link className="sign-up " to="/signup">Sign Up</Link>
                        <Link className="log-in register-focused" to="/login">Log In</Link>
                    </div>
                    {
                        props.children
                    }
                </div>
            </section>


        </>
    )
}