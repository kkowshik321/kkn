import React from "react";

export default function Hdemo1() {
    const a = 10, b = 20, txt = "Kowshik", flag = false
    const Student = {
        name: "kowwshikk",
        id: 200,
        mobile: 12345687
    };
    return (
        <div>
            a={a}<br />
            b={b}<br />
            Student_name={Student.name}<br />
            Student_id={Student.id}<br />
            Student_txt={txt}<br />{
                flag ? <h2>Kowshik</h2> : <h2>Rishik</h2>}
        </div>
    );
}