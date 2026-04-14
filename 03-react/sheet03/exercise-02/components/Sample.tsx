import { useState } from "react";

function Sample() {
    const [value, setValue] = useState(0);
    function updateValue() {
        setValue(previous => ++previous);
    }
    return (
        <section>
            <p>{value}</p>
            <button onClick={updateValue}>Actualizar</button>
        </section>
    );
}

export default Sample;