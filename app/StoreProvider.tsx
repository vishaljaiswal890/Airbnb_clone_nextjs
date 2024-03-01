'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from './redux/UiStore';

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<typeof makeStore | null>(null)
    if (!storeRef.current) {
        storeRef.current = makeStore
        // storeRef.current.dispatch(initializeCount(count))
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}