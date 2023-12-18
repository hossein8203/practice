import {useEffect, useState} from "react";
import {DtPicker} from "react-calendar-datetime-picker"
import "react-calendar-datetime-picker/dist/style.css"
import axios from "axios";

export const Calendar = props => {

    const [date, setDate] = useState(null)
    const [isHoliday, setIsHoliday] = useState(null)
    const [message,setMessage] = useState("")

    const setDateHandler = e => {
        setDate(e)

    }

    const getOccasion = () => {
        if (date == null)
            return

        const year = date.year
        const month = date.month
        const day = date.day


        try {
            const promise = axios.get(
                `https://holidayapi.ir/jalali/${year}/${month}/${day}`
            )

            promise.then(ans => {
                const holiday = ans.data["is_holiday"]
                setIsHoliday(holiday)
                console.log(ans)
                if (holiday===true){
                    setMessage("تعطیله")
                }else {
                    setMessage("تعطیل نیست!")
                }

                console.log(message)
            })
            promise.catch(data => {
                console.log(data)
            })
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <>

            <div className="row">
                <div className="col-10">
                    <DtPicker
                        onChange={(e) => setDateHandler(e)}
                        local='fa'
                    />
                </div>
                <div className="col-2">
                    <button className={"btn btn-primary"} onClick={getOccasion}>تعطیل هست؟</button>
                </div>
                <div className="col-10">
                    <div className={isHoliday === true ? "alert alert-success" : "alert alert-danger"}>
                        {
                            message
                        }
                    </div>
                </div>
            </div>


        </>
    )
}