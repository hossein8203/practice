import {Link} from "react-router-dom";

export const LogIn=props=>{

    return(
        <>
            <div id="register-wrapper">
                <div className="register" id="log-in">
                    <h4 className="register-title">
                        خوش برگشتید
                    </h4>
                    <form action="#">
                        <div className="row gx-2 gy-0">
                            <div className="col-12">
                                <label className="register-label" htmlFor="log-in-email">ایمیل</label>
                                <input className="register-field" id="log-in-email" name="logInEmail"
                                       placeholder="Enter Your Email" required
                                       type="email"/>
                            </div>

                            <div className="col-12">
                                <label className="register-label" htmlFor="log-in-password">رمز</label>
                                <input className="register-field password" id="log-in-password" name="logInPassword"
                                       placeholder="Enter Your Password"
                                       required type="password"/>

                            </div>

                            <div className="col-12">
                                <button className="register-sub" type="submit">
                                 <span>
                                     ورود
                                 </span>
                                </button>
                            </div>
                        </div>

                    </form>
                </div>

                <button id="close-register" type="button">
                    <Link to="/">
                        <i className="fa-solid fa-arrow-left"></i>
                    </Link>
                </button>
            </div>


        </>
    )
}