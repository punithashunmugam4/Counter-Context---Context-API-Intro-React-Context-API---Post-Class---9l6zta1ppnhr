import React, { createContext, useContext, useState } from "react";





const counterContext = createContext()


const CounterStateContext = (props) => {
    // const lev=useContext(counterContext)
    const [count,setCount]=useState(0)
    return (
        <div id="counter-context">
            <counterContext.Provider value={{ count, setCount }}>
                {props.children}
            </counterContext.Provider >
        </div>

    )
}

export { counterContext, CounterStateContext }

