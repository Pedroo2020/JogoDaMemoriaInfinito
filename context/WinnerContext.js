import { createContext, useState } from "react";

export const WinnerContext = createContext();

export function WinnerProvider({ children }) {
    const [winner, setWinner] = useState(null);

    return (
        <WinnerContext.Provider value={{ winner, setWinner }}>
            {children}
        </WinnerContext.Provider>
    );
}
