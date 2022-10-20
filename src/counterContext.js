import React, { createContext, useContext, useState } from "react";





const counterContext = createContext(1)


const CounterStateContext = (props) => {
    const lev=useContext(counterContext)
    const [count,setCount]=useState(lev)
    return (
        <div id="counter-context">
            <counterContext.Provider value={{ count, setCount }}>
                {props.children}
            </counterContext.Provider >
        </div>

    )
}

export { counterContext, CounterStateContext }

