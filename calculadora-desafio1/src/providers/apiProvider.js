import { createContext, useState } from "react";

export const ApiCalculatorContext = createContext([]);

export const ApiCalculatorProvider = ({children}) => {
    const [calculatorApi, setCalculatorApi] = useState({ 1: 0, 15: 0, 30: 0, 90: 0 });

    return (
        <ApiCalculatorContext.Provider value={{calculatorApi, setCalculatorApi}}>
            {children}
        </ApiCalculatorContext.Provider>
    );
};

