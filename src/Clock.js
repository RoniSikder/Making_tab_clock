import React, { useEffect, useState } from 'react'

const Clock = () => {
    let timer = new Date
    let [time, setTime] = useState({
        hour: timer.getHours(),
        min: timer.getMinutes(),
        sec: timer.getSeconds()
    })
    function refreash() {
        setTime({
            hour: new Date().getHours(),
            min: new Date().getMinutes(),
            sec: new Date().getSeconds()
        })
    }

    useEffect(() => {
        setInterval(refreash, 1000)
    })
    return (
        <div>
            <div style={{ textAlign: "center", fontSize: "400px", alignItems: "center", color: 'white', height: "100vh" }}>
                <div className="conta">
                    {time.hour}:{time.min}:{time.sec}
                </div>
            </div>
        </div>
    )
}

export default Clock