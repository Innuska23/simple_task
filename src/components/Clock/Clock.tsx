import React, { useEffect, useState } from "react"
import s from './Clock.module.css'

type ClockPropsType = {}

export const Clock: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        },
            1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])


    const get2digitsString = (time: number) => time < 10 ? '0' + time : time;

    return (
        <div className={s.clockContainer}>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
    )
}