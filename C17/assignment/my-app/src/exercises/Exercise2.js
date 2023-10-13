import React, { useState } from "react";
import '../App.css';

function Exercise2() {
    const [count, setCount] = useState(0);

    return (
        <div className="app2">
            {
                // if else statement to determine color of the counter
            }
            <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
                {count}
            </h1>
            <div className="button__wrapper">
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    );
}

export default Exercise2;