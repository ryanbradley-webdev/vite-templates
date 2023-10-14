import { ReactNode, createContext } from 'react'

export const ExampleContext = createContext({})

export default function ExampleProvider({
    children
}: {
    children: ReactNode
}) {
    const value = {}

    return (
        <ExampleContext.Provider
            value={value}
        >
            {children}
        </ExampleContext.Provider>
    )
}