import React, { useState } from 'react';
export default function Hdemo3() {
    const [kowshik, setKowshik] = useState(true)

    function changeState() {
        setKowshik(!kowshik)
    }
    return (
        <div>
            {
                kowshik ? <b>single</b> : <b>Single pro max</b>
            }<br />
            <button onClick={changeState}>Change</button><br />
        </div>
    )
}
