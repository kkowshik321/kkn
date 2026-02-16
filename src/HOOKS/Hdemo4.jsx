import React, { useState } from 'react';
export default function Hdemo4() {
    const [fan, setFan] = useState("Select your fan")

    function fan1() {
        setFan("Rohith")
    }
    function fan2() {
        setFan("kohli")
    }
    function fan3() {
        setFan("hardik")
    }
    return (
        <div>
            Favourite Player={fan}<br />
            <button onClick={fan1}>fan1</button><br />
            <button onClick={fan2}>fan2</button><br />
            <button onClick={fan3}>fan3</button><br />
        </div>
    )
}