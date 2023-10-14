import { useState } from 'react'

export function useExampleState(initialState: unknown) {
    const [state, setState] = useState(initialState)

    return [state, setState]
}