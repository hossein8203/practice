import {useEffect, useState} from "react";
import {DtPicker} from "react-calendar-datetime-picker"
import "react-calendar-datetime-picker/dist/style.css"
import axios from "axios";

export const Calendar = props => {

    const [date, setDate] = useState(null)

    useEffect(() => {
        console.log(date)
    }, [date]);

    const getOccasion = () => {
        if (date === null)
            return
        else {
            var promise = null
            const year = date.year
            const month = date.month
            const day = date.day
            try {
                promise = axios.get(
                    `https://holidayapi.ir/jalali/${year}/${month}/${day}`
                )
            }catch (err){
                console.log(err)
            }
        }


        console.log(promise)

    }

    return (
        <>

            <div className="row">
                <div className="col-10">
                    <DtPicker
                        onChange={setDate}
                        local='fa'
                    />
                </div>
                <div className="col-2">
                    <button className={"btn btn-primary"} onClick={getOccasion}>تعطیل هست؟</button>
                </div>
            </div>


        </>
    )
}