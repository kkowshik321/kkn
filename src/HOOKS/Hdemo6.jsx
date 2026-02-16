import React, { useRef } from 'react';
export default function Hdemo6() {
    const refId = useRef(null)
    const refName = useRef(null)
    function Formhandle(e) {
        e.preventDefault()
        const id = refId.current.value
        const name = refName.current.value
        alert(id + "," + name)
    }
    return (
        <div>
            <form onSubmit={Formhandle}>
                NAME:
                <input type="text" placeholder="Name.." ref={refName} required></input><br />
                ID:
                <input type="number" placeholder="id.." ref={refId} required></input><br /><br />
                <input type="submit" value="Submit" /><br />
                <input type="reset" value="Clear" /><br />
            </form>
        </div>
    )
}