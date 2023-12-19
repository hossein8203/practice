import {Link, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {toast} from "react-toastify";
import {useAxios} from "../ApiService";
import queryString from "query-string"

export const LogIn = props => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()
    const location = useLocation()


    const loginHandler = async (e) => {
        e.preventDefault()

        try {
            const result = await useAxios.post("/login", user)
            const {token} = result.data
            localStorage.setItem("token", token)
            console.log("success")

            let destination = '/'
            const searched = queryString.parse(location.search)["url"]
            console.log(searched)
            if(searched !== " "){
                destination = searched
            }
            navigate(destination ,{replace : true})
            console.log(destination)

        } catch (err) {

            console.log(err)

            if (err.response && err.response.status && err.response.status == 401) {
                toast(err.response.data.error, {
                    position: "top-center"
                })
            }
        }
    }

    const inputHandler = e => {
        const {name, value} = e.target
        const u = {...user}
        u[name] = value
        setUser(u)
    }


    return (
        <>
            <div id="register-wrapper">
                <div className="register" id="log-in">
                    <h4 className="register-title">
                        خوش برگشتید
                    </h4>
                    <form action="#" onSubmit={loginHandler}>
                        <div className="row gx-2 gy-0">
                            <div className="col-12">
                                <label className="register-label" htmlFor="log-in-email">نام کاربری</label>
                                <input className="register-field" id="log-in-email" name="username"
                                       placeholder="نام کاربری" required
                                       type="text" onInput={inputHandler}/>
                            </div>

                            <div className="col-12">
                                <label className="register-label" htmlFor="log-in-password">رمز</label>
                                <input className="register-field password" id="log-in-password" name="password"
                                       placeholder="رمز عبور"
                                       required type="password" onInput={inputHandler}/>

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