import React, { useState } from 'react';
export default function Hdemo2() {
    const [nm, setNm] = useState("kowshik")
    function change1() {
        setNm("Rishik")
    }
    return (
        <div>
            NAME={nm}<br />
            <button onClick={change1}>Change</button><br />
            <br />
        </div>
    );
}
